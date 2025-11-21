import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration for ReFi Mediterranean
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */

// Support environment variables for multi-language builds
const LOCALE = (process.env.QUARTZ_LOCALE as string) || "en-US"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "ReFi Mediterranean",
    pageTitleSuffix: " - Regenerative Finance for the Mediterranean",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: LOCALE as any,
    baseUrl: "refidao.github.io/ReFi-Mediterranean",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F5F5DC",           // Warm beige background (sand)
          lightgray: "#E8E8D8",        // Light stone gray
          gray: "#7A8A9A",            // Medium gray (stone)
          darkgray: "#2C3E50",         // Dark slate text
          dark: "#0D4A6B",            // Deep blue headings (ocean depths)
          secondary: "#1E7A9F",        // Mediterranean blue links
          tertiary: "#D4A574",        // Warm gold hover
          highlight: "rgba(30, 122, 159, 0.15)",  // Blue selection
          textHighlight: "rgba(30, 122, 159, 0.25)", // Blue highlight
        },
        darkMode: {
          light: "#0F1F2E",           // Deep navy background (night ocean)
          lightgray: "#1A2B3D",       // Dark blue-gray surface
          gray: "#6B7F8F",            // Muted gray-blue
          darkgray: "#C8D4E0",        // Light blue-gray text
          dark: "#4AB3D9",            // Light aqua headings (shallow water)
          secondary: "#1E7A9F",       // Mediterranean blue links
          tertiary: "#D4A574",       // Warm gold hover (sunset)
          highlight: "rgba(74, 179, 217, 0.15)",  // Aqua selection
          textHighlight: "rgba(74, 179, 217, 0.25)", // Aqua highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time initially
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config

