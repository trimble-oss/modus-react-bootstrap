export interface Menu {
  key: string
  title: string
  subtitle?: string
  path?: string
  children?: Menu[]
  styleguideUrl?: string
}

const foundationsMenu: Menu = {
  key: "foundations",
  title: "Foundations",
  children: [
    {
      key: "typography",
      title: "Typography",
      styleguideUrl: "https://modus.trimble.com/foundations/typography/",
      subtitle:
        "Typography can help create clear hierarchies, organize information, and guide users through a product or experience.",
    },
    {
      key: "color-palette",
      title: "Color Palette",
      subtitle: "The Modus palette is based on the Trimble brand colors.",
      styleguideUrl: "https://modus.trimble.com/foundations/color-palette/",
    },
    {
      key: "shadows-and-depth",
      title: "Shadows & Depth",
      styleguideUrl: "https://modus.trimble.com/foundations/shadows-and-depth/",
      subtitle:
        "Depth is defined through a combination of z-index, overlays, and drop shadows. Use it to focus the user’s attention on a task, provide temporary supplementary information, or define spatial relationships between content.",
    },
    {
      key: "grid-and-spacing",
      title: "Grid & Spacing",
      styleguideUrl: "https://modus.trimble.com/foundations/grid-and-spacing/",
      subtitle:
        "Space helps organize content, permitting consistent density and visual order that telegraphs our brand. Space is a way to unify the padding, margins, and heights.",
    },
    {
      key: "icons",
      title: "Icons",
      subtitle:
        "Guidance and suggestions for using external Modus icon library.",
    },
  ],
}

const gettingStartedMenu: Menu = {
  key: "getting-started",
  title: "Getting Started",
  subtitle: `The Modus React Bootstrap is a React-based component library extended
        from react-bootstrap component library developed as a common, open
        source platform for all of Trimble’s web applications built on ReactJs.
        The framework is designed and managed by the Trimble UX Council.`,
  children: [
    {
      key: "getting-started",
      title: "Getting Started",
      subtitle: `The Modus React Bootstrap is a React-based component library extended
        from react-bootstrap component library developed as a common, open
        source platform for all of Trimble’s web applications built on ReactJs.
        The framework is designed and managed by the Trimble UX Council.`,
    },
    {
      key: "usage",
      title: "Usage",
      subtitle:
        "Demonstrate how to import and use the Modus React Bootstrap components.",
    },
    {
      key: "changelog",
      title: "Changelog",
      subtitle: "View list of changes of releases.",
    },
  ],
}

const layoutMenu: Menu = {
  key: "layout",
  title: "Layout",
  subtitle:
    "Besides the aesthetics and UI elements, the Modus Framework has an optional layout you can use for your web applications.",
  children: [
    {
      key: "layout",
      title: "Layout",
      subtitle:
        "Besides the aesthetics and UI elements, the Modus Framework has an optional layout you can use for your web applications.",
    },
  ],
}

const utilitiesMenu: Menu = {
  key: "utilities",
  title: "Utilities",
  children: [
    {
      key: "borders",
      title: "Borders",
      subtitle:
        "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.",
    },
    {
      key: "clearfix",
      title: "Clearfix",
      subtitle:
        "Quickly and easily clear floated content within a container by adding a clearfix utility.",
    },
    {
      key: "close-icon",
      title: "Close Icon",
      subtitle:
        "Use a generic close icon for dismissing content like modals and alerts.",
    },
    {
      key: "display",
      title: "Display",
      subtitle:
        "Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.",
    },
    {
      key: "embed",
      title: "Embed",
      subtitle:
        "Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.",
    },
    {
      key: "flex",
      title: "Flex",
      subtitle:
        "Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
    },
    {
      key: "float",
      title: "Float",
      subtitle:
        "Toggle floats on any element, across any breakpoint, using these responsive float utilities.",
    },
    {
      key: "interactions",
      title: "Interactions",
      subtitle:
        "Utility classes that change how users interact with contents of a website.",
    },
    {
      key: "overflow",
      title: "Overflow",
      subtitle:
        "Use these shorthand utilities for quickly configuring how content overflows an element.",
    },
    {
      key: "padding-and-margin",
      title: "Padding and Margins",
      subtitle:
        "Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.",
    },
    {
      key: "position",
      title: "Position",
      subtitle:
        "Use these shorthand utilities for quickly configuring the position of an element.",
    },
    {
      key: "screen-readers",
      title: "Screen Readers",
      subtitle:
        "Use screen reader utilities to hide elements on all devices except screen readers.",
    },
    {
      key: "sizing",
      title: "Sizing",
      subtitle:
        "Easily make an element as wide or as tall with our width and height utilities.",
    },
    {
      key: "text",
      title: "Text",
      subtitle:
        "Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.",
    },
    {
      key: "vertical-alignment",
      title: "Vertical Alignment",
      subtitle:
        "Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.",
    },
    {
      key: "visibility",
      title: "Visibility",
      subtitle:
        "Control the visibility, without modifying the display, of elements with visibility utilities.",
    },
  ],
}

const componentsMenu: Menu = {
  key: "components",
  title: "Components",
  subtitle:
    "Components are the building blocks of the design system designed with users in mind.",
  children: [
    {
      key: "accordions",
      title: "Accordions",
      styleguideUrl: "https://modus.trimble.com/components/accordions/",
      subtitle:
        "The accordion component delivers large amounts of content in a small space through progressive disclosure. That is, the user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.",
    },
    {
      key: "alerts",
      title: "Alerts",
      styleguideUrl: "https://modus.trimble.com/components/alerts/",
      subtitle:
        "Alerts provide contextual information adjacent to items on the visible page. There are four types: error, warning, success, or informational.",
    },
    {
      key: "badges",
      title: "Badges",
      styleguideUrl: "https://modus.trimble.com/components/badges/",
      subtitle: "Badges are labels which hold small amounts of information.",
    },
    {
      key: "breadcrumbs",
      title: "Breadcrumbs",
      styleguideUrl: "https://modus.trimble.com/components/breadcrumbs/",
      subtitle:
        "The breadcrumb component is a secondary navigation pattern that shows hierarchy among content or traces a user’s path.",
    },
    {
      key: "buttons",
      title: "Buttons",
      styleguideUrl: "https://modus.trimble.com/components/buttons/",
      subtitle:
        "Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.",
    },
    {
      key: "cards",
      title: "Cards",
      styleguideUrl: "https://modus.trimble.com/components/cards/",
      subtitle:
        "Cards provide a set of content which acts as an entry point to more detailed information.",
    },
    {
      key: "checkboxes",
      title: "Checkboxes",
      styleguideUrl: "https://modus.trimble.com/components/checkboxes/",
      subtitle:
        "Checkboxes are used for a list of options where the user may select multiple options, including all or none.",
    },
    {
      key: "chips",
      title: "Chips",
      styleguideUrl: "https://modus.trimble.com/components/chips/",
      subtitle:
        "Chips are compact elements that represent an input, attribute, or action. Chips should appear dynamically as a group of multiple interactive elements. Unlike buttons, which should be a consistent and familiar call to action, one that a user expects to appear as the same action in the same general area.",
    },
    {
      key: "content-tree",
      title: "Content Tree",
      styleguideUrl: "https://modus.trimble.com/components/content-tree/",
      subtitle:
        "A content tree provides users with a way to navigate nested hierarchical information using a parent-child relationship model.",
    },
    {
      key: "dropdowns",
      title: "Dropdowns",
      styleguideUrl: "https://modus.trimble.com/components/dropdowns/",
      subtitle:
        "Dropdowns present a list of options that can be used to filter or sort existing content. They can also be used as menus. Their use as menus can be seen in tabs. At a smaller screen size, the tabs collapse into a dropdown.",
    },
    {
      key: "file-upload-dropzone",
      title: "File Upload Dropzone",
      styleguideUrl:
        "https://modus.trimble.com/components/file-upload-dropzone/",
      subtitle:
        "File upload dropzone allows users to upload single or multiple files to the application by dragging and dropping.",
    },
    {
      key: "inputs",
      title: "Inputs",
      styleguideUrl: "https://modus.trimble.com/components/inputs/",
      subtitle:
        "Input boxes gather information from users. Labels sit atop these elements.",
    },
    {
      key: "lists",
      title: "Lists",
      styleguideUrl: "https://modus.trimble.com/components/lists/",
      subtitle:
        "A list can be used to display content related to a single subject.",
    },
    {
      key: "messages",
      title: "Messages",
      styleguideUrl: "https://modus.trimble.com/components/messages/",
      subtitle:
        "Messages provide the user with contextual static information. They have a lower priority than an alert.",
    },
    {
      key: "modals",
      title: "Modals",
      styleguideUrl: "https://modus.trimble.com/components/modals/",
      subtitle:
        "Modals gather information, complete a subtask, or provide additional information without losing the context of an underlying page.",
    },
    {
      key: "navbar",
      title: "Navbar",
      styleguideUrl: "https://modus.trimble.com/components/navbar/",
      subtitle:
        "The navbar provides context through globally accessible menu options.",
    },
    {
      key: "pagination",
      title: "Pagination",
      styleguideUrl: "https://modus.trimble.com/components/pagination/",
      subtitle:
        "Pagination affords navigation between pages of content, and it highlights which page is currently in view.",
    },
    {
      key: "progress-bars",
      title: "Progress Bars",
      styleguideUrl: "https://modus.trimble.com/components/progress-bars/",
      subtitle:
        "Progress indicators express an unspecified wait time or display the length of a process.",
    },
    {
      key: "radio-buttons",
      title: "Radio Buttons",
      styleguideUrl: "https://modus.trimble.com/components/radio-buttons/",
      subtitle:
        "Radio buttons are used when a list of two or more options are mutually exclusive, meaning the user must select only one option.",
    },
    {
      key: "sliders",
      title: "Sliders",
      styleguideUrl: "https://modus.trimble.com/components/sliders/",
      subtitle:
        "Range Sliders select a numeric value, or range of values, by moving a handle, or set of handles, along a bar. The slider in its basic form should be accompanied by a label and a number input that doubles as a display for the slider’s current value.",
    },
    {
      key: "spinners",
      title: "Spinners",
      styleguideUrl: "https://modus.trimble.com/components/spinners/",
      subtitle: "Spinners indicate progress by showing users a loading state.",
    },
    {
      key: "switches",
      title: "Switches",
      styleguideUrl: "https://modus.trimble.com/components/switches/",
      subtitle: "Switches are used to toggle functionality.",
    },
    {
      key: "tables",
      title: "Tables",
      styleguideUrl: "https://modus.trimble.com/components/tables/",
      subtitle:
        "Tables display information in a grid-like format of rows and columns. They organize information in a way that’s easy to scan, so that users can look for patterns and insights.",
    },
    {
      key: "tabs",
      title: "Tabs",
      styleguideUrl: "https://modus.trimble.com/components/tabs/",
      subtitle:
        "Tabs are used to quickly navigate between views within the same context. They serve as a form of navigation between related content.",
    },
    {
      key: "toasts",
      title: "Toasts",
      styleguideUrl: "https://modus.trimble.com/components/toasts/",
      subtitle: "Toasts are types of alerts.",
    },
    {
      key: "tooltips",
      title: "Tooltips",
      styleguideUrl: "https://modus.trimble.com/components/tooltips/",
      subtitle:
        "Tooltips provide a short description of a page element or control.",
    },
  ],
}

const GetNavigationMenu = function (includeOnly?: string): Menu[] {
  let menusWithNoIndexPage = [foundationsMenu.key, utilitiesMenu.key]
  return [
    gettingStartedMenu,
    layoutMenu,
    foundationsMenu,
    componentsMenu,
    utilitiesMenu,
  ]
    .filter(parent => !includeOnly || parent.key == includeOnly)
    .map(parent => {
      return {
        path: `/${parent.key}/${
          menusWithNoIndexPage.includes(parent.key)
            ? parent.children[0].key
            : ""
        }`,
        children: parent.children.map(child => {
          return {
            path:
              parent.key === child.key
                ? `/${child.key}`
                : `/${parent.key}/${child.key}`,
            key: child.key,
            title: child.title,
            subtitle: child.subtitle,
            styleguideUrl: child.styleguideUrl,
          }
        }),
        key: parent.key,
        title: parent.title,
        subtitle: parent.subtitle,
      }
    })
}

export default GetNavigationMenu
