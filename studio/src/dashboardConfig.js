export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "614088925f94222be71d4363",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-mrmk6k4p",
                  apiId: "bfc4c0a4-7350-4dc6-83db-106fe4a3a705",
                },
                {
                  buildHookId: "614088938b4ab7287f75da72",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-atjqxcd4",
                  apiId: "03050aa5-1531-4a8f-98a4-41548f597bc2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pineappleperson/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-atjqxcd4.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
