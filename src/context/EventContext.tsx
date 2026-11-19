"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { EventDetails, TicketTier, Order } from "@/lib/types";
import { SEED_EVENT } from "@/lib/mock-data";

interface EventContextType {
  event: EventDetails;
  updateEvent: (updates: Partial<EventDetails>) => void;
  updateTier: (index: number, updates: Partial<TicketTier>) => void;
  addTier: (tier?: Partial<TicketTier>) => void;
  removeTier: (index: number) => void;
  toggleSalesSetting: (key: keyof NonNullable<EventDetails["salesSettings"]>) => void;
  orders: Order[];
  submitOrder: (order: Omit<Order, "id" | "createdAt">) => Order;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [event, setEvent] = useState<EventDetails>(SEED_EVENT);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("gatepass_event");
      if (saved) {
        setEvent(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveEventState = (next: EventDetails) => {
    setEvent(next);
    try {
      localStorage.setItem("gatepass_event", JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const updateEvent = (updates: Partial<EventDetails>) => {
    saveEventState({ ...event, ...updates });
  };

  const updateTier = (index: number, updates: Partial<TicketTier>) => {
    const newTiers = [...event.tiers];
    newTiers[index] = { ...newTiers[index], ...updates };
    saveEventState({ ...event, tiers: newTiers });
  };

  const addTier = (tier?: Partial<TicketTier>) => {
    const newTier: TicketTier = {
      id: "tier-" + Date.now(),
      name: tier?.name || "",
      description: tier?.description || "",
      price: tier?.price ?? 0,
      quantity: tier?.quantity ?? 0,
      salesEnd: tier?.salesEnd || event.date,
    };
    saveEventState({
      ...event,
      tiers: [...event.tiers, newTier],
    });
  };

  const removeTier = (index: number) => {
    if (event.tiers.length <= 1) return;
    const newTiers = event.tiers.filter((_, i) => i !== index);
    saveEventState({ ...event, tiers: newTiers });
  };

  const toggleSalesSetting = (key: keyof NonNullable<EventDetails["salesSettings"]>) => {
    const currentSettings = event.salesSettings || {
      whatsappAndEmail: true,
      multiPayment: true,
      multiCurrency: true,
      cappedResale: true,
      waitlistEnabled: false,
    };
    saveEventState({
      ...event,
      salesSettings: {
        ...currentSettings,
        [key]: !currentSettings[key],
      },
    });
  };

  const submitOrder = (orderData: Omit<Order, "id" | "createdAt">): Order => {
    const newOrder: Order = {
      ...orderData,
      id: "ord_" + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
    };
    console.log("Submitted typed Order payload:", newOrder);
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <EventContext.Provider
      value={{
        event,
        updateEvent,
        updateTier,
        addTier,
        removeTier,
        toggleSalesSetting,
        orders,
        submitOrder,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvent() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
}
