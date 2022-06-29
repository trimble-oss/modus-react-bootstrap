export type LayoutItemType = {
  title: string;
  content: React.ReactNode;
};

interface LayoutProps {
  prefix: string;
  title: string;
  items: LayoutItemType[];
}
export default function Layout({ prefix, title, items }: LayoutProps) {
  return (
    <div className="modus-body sidebar-closed" data-modus-item="body">
      <div className="modus-content-rows" role="main">
        <div className="modus-content-columns">
          <div className="modus-content sample-page-content">
            <h2
              id={`${prefix}-${title.replace(" ", "")}`}
              className="font-weight-bold"
            >
              {title}
            </h2>
            <div className="grid-layout">
              {items.map((item) => {
                return (
                  <div className="grid-item bg-white">
                    <h3 id={`${prefix}-${item.title.replace(" ", "")}`}>
                      {item.title}
                    </h3>
                    {item.content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
