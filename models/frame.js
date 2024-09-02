// models/Frame.js

const connection = require('../db');

const insertFrame1 = (frame, callback) => {
    connection.query('INSERT INTO frames () VALUES ()', (err, result) => {
        if (err) return callback(err);
        const frameId = result.insertId;
        const phasors = frame.phasors;
        const phasorTypes = ['e4', 'i4', 'e8', 'i8', 'e12', 'i12'];

        const phasorData = phasorTypes.map((type) => [
            frameId,
            type,
            phasors[type].ph,
            phasors[type].mag,
            phasors[type].freq,
            phasors[type].rocof
        ]);

        connection.query('INSERT INTO phasors (frame_id, type, ph, mag, freq, rocof) VALUES ?', [phasorData], (err) => {
            if (err) return callback(err);
            callback(null, frameId);
        });
    });
};
const insertFrame2 = (frame, callback) => {
    connection.query('INSERT INTO frames2 () VALUES ()', (err, result) => {
        if (err) return callback(err);
        const frameId = result.insertId;
        const phasors = frame.phasors;
        const phasorTypes = ['e4', 'i4', 'e8', 'i8', 'e12', 'i12'];

        const phasorData = phasorTypes.map((type) => [
            frameId,
            type,
            phasors[type].ph,
            phasors[type].mag,
            phasors[type].freq,
            phasors[type].rocof
        ]);

        connection.query('INSERT INTO phasors2 (frame_id, type, ph, mag, freq, rocof) VALUES ?', [phasorData], (err) => {
            if (err) return callback(err);
            callback(null, frameId);
        });
    });
};

module.exports = {
    insertFrame1 , insertFrame2 
};
