import express from "express";
import mysql from "mysql"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json())
const db = mysql.createConnection({
    host: "bk4jzlf6ei8j2f59x9ji-mysql.services.clever-cloud.com",
    user: "udft6lyiboxvhljd",
    password: "EZbzDbtFT8GHe5tmlp17",
    database: "bk4jzlf6ei8j2f59x9ji"
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM ticket";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    })
})

app.post('/ticket', (req, res) => {
    const sql = "INSERT INTO ticket (`Date`,`Time`,`TicketID`,`Odds`,`bet`,`Potent`,`country1`,`countryLig1`,`Time1`,`Team1`,`Team2`,`SingleScore`,`SingleScore2`,`Odd1`,`country2`,`countryLig2`,`Time2`,`Team3`,`Team4`,`SingleScore3`,`SingleScore4`,`Odd2`) VALUES (?)";
    console.log(req.body);
    const vlaues = [
        req.body.date,
        req.body.time,
        req.body.ticket,
        req.body.odds,
        req.body.bet,
        req.body.potent,
        req.body.country1,
        req.body.countryLig1,
        req.body.time1,
        req.body.team1,
        req.body.team2,
        req.body.singlescore,
        req.body.singlescore2,
        req.body.odd1,
        req.body.country2,
        req.body.countryLig2,
        req.body.time2,
        req.body.team3,
        req.body.team4,
        req.body.singlescore3,
        req.body.singlescore4,
        req.body.odd2
    ]
    db.query(sql, [vlaues], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.get('/run/:id', (req, res) => {
    const sql = "SELECT * FROM ticket WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    })
})
app.get('/won/:id', (req, res) => {
    const sql = "SELECT * FROM ticket WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM ticket WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    })
})

app.listen(3306, () => {
    console.log("Listening")
})
