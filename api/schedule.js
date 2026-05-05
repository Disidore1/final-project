export default function handler(req, res) {
  res.status(200).json({
    items: [
      {
        title: "Easter Tournament",
        date: "April 5, 2026",
        location: "Pennsylvania",
        type: "Team Duals",
        ages: "5–18"
      },
      {
        title: "4th of July Tournament",
        date: "July 4, 2026",
        location: "Pennsylvania",
        type: "Team and Individual",
        ages: "5–18"
      },
      {
        title: "Labor Day Tournament",
        date: "September 7, 2026",
        location: "Pennsylvania",
        type: "Individual",
        ages: "5–18"
      }
    ]
  });
}