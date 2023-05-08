-- Active: 1683293401108@@127.0.0.1@3306
CREATE TABLE heroes (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    hero_class TEXT NOT NULL,
    kingdom TEXT UNIQUE NOT NULL,
    race TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

CREATE TABLE kingdoms (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    age REAL DEFAULT (0) NOT NULL,
    kingdom_hero TEXT NOT NULL REFERENCES heroes (id) ON DELETE CASCADE
);

CREATE TABLE battles (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    location TEXT NOT NULL,
    date TEXT NOT NULL,
    winner_id TEXT NOT NULL REFERENCES heroes (id) ON DELETE CASCADE,
    loser_id TEXT NOT NULL REFERENCES heroes (id) ON DELETE CASCADE,
    kingdom_id TEXT NOT NULL REFERENCES kingdoms (id) ON DELETE CASCADE
);

INSERT INTO heroes (id, name, hero_class, kingdom, race, created_at)
VALUES
    ('1', 'Aragorn', 'Warrior', 'Gondor', 'Human', DATETIME()),
    ('2', 'Gandalf', 'Wizard', 'Rohan', 'Wizard', DATETIME()),
    ('3', 'Legolas', 'Archer', 'Mirkwood', 'Elf', DATETIME());

INSERT INTO kingdoms (id, name, age, kingdom_hero)
VALUES ('1', 'Gondor', 2000, '1'), ('2', 'Rohan', 1000, '2'), ('3', 'Mirkwood', 500, '3');

INSERT INTO battles (id, location, date, winner_id, loser_id, kingdom_id)
VALUES
    ('1', 'Helm''s Deep', '2023-05-01 12:00:00', '2', '1', '2'),
    ('2', 'Minas Tirith', '2023-05-03 09:00:00', '1', '2', '1'),
    ('3', 'Moria', '2023-05-04 15:30:00', '3', '2', '3');
