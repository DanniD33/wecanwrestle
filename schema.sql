-- schema.sql
-- This file contains only table structure. No sensitive data or credentials.

CREATE TABLE IF NOT EXISTS attendee (
    id SERIAL PRIMARY KEY,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    weight INTEGER,
    session VARCHAR(100),
    cansbrought INTEGER DEFAULT 0,
    waiver BOOLEAN DEFAULT FALSE,
    efname VARCHAR(100),
    elname VARCHAR(100),
    phone VARCHAR(15)
);
