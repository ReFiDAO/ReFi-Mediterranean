import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Navigation(),
    Component.Search(),
    // LANGUAGE_SWITCHER_PLACEHOLDER - Will be added if multilang package is enabled
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "ReFi DAO": "https://refidao.com",
      "Twitter/X": "https://x.com/Refi_Med",
      "GitHub": "https://github.com/ReFiDAO/ReFi-Mediterranean",
      "Telegram": "https://t.me/refimediterranean",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
    // COMMENTS_PLACEHOLDER - Will be added if comments package is enabled
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [],
}


