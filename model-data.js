
export default function handler(req, res) {
  res.status(200).json([
    {
      home_team: "Georgia",
      away_team: "Alabama",
      pick: "Alabama +6.5",
      confidence: 84,
      edge: "+3.1"
    },
    {
      home_team: "Michigan",
      away_team: "Ohio State",
      pick: "Michigan -3",
      confidence: 79,
      edge: "+1.8"
    },
    {
      home_team: "LSU",
      away_team: "Texas",
      pick: "LSU -2.5",
      confidence: 71,
      edge: "+2.2"
    }
  ]);
}
