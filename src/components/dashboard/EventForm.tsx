"use client";

import React from "react";

interface EventFormProps {
  name: string;
  date: string;
  doorsOpen: string;
  venue: string;
  description: string;
  onChange: (fields: {
    name?: string;
    date?: string;
    doorsOpen?: string;
    venue?: string;
    description?: string;
  }) => void;
}

export function EventForm({
  name,
  date,
  doorsOpen,
  venue,
  description,
  onChange,
}: EventFormProps) {
  return (
    <div className="card">
      <h2 className="h" style={{ fontSize: "28px", marginBottom: "20px" }}>
        Event details
      </h2>
      <div className="row">
        <div>
          <label className="fl" htmlFor="n">
            Event name
          </label>
          <input
            id="n"
            className="inp"
            value={name}
            onChange={(e) => onChange({ name: e.target.value })}
          />
        </div>
        <div className="row" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label className="fl" htmlFor="d">
              Date
            </label>
            <input
              id="d"
              className="inp"
              value={date}
              onChange={(e) => onChange({ date: e.target.value })}
            />
          </div>
          <div>
            <label className="fl" htmlFor="t">
              Doors open
            </label>
            <input
              id="t"
              className="inp"
              value={doorsOpen}
              onChange={(e) => onChange({ doorsOpen: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label className="fl" htmlFor="v">
            Venue
          </label>
          <input
            id="v"
            className="inp"
            value={venue}
            onChange={(e) => onChange({ venue: e.target.value })}
          />
        </div>
        <div>
          <label className="fl" htmlFor="x">
            Description
          </label>
          <textarea
            id="x"
            className="inp"
            style={{ height: "96px", padding: "12px 14px", resize: "none" }}
            value={description}
            onChange={(e) => onChange({ description: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
