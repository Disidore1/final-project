export default function handler(req, res) {
  res.status(200).json({
    title: "Oompa Loompa Wrestling Menu",
    items: [
      {
        id: "home",
        title: "Home",
        slug: "home"
      },
      {
        id: "schedule",
        title: "Schedule",
        slug: "schedule"
      },
      {
        id: "wrestlers",
        title: "Wrestlers",
        slug: "wrestlers"
      },
      {
        id: "media",
        title: "Media",
        slug: "media"
      },
      {
        id: "more",
        title: "More",
        slug: "more",
        children: [
          {
            id: "about",
            title: "About",
            slug: "home"
          },
          {
            id: "events",
            title: "Events",
            slug: "schedule"
          }
        ]
      }
    ]
  });
}