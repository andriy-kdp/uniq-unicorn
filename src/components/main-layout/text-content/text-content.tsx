import { Wrap } from "../../wrap/wrap.component";
import {
  TextDescription,
  TextMainContainer,
  TextMainTitle,
  TextMiniTitle,
  TextSubTitle,
  TextTitle,
} from "./text-content.styles";

export interface IPageContent {
  mainTitle?: string;
  title?: string;
  miniTitle?: string;
  inlineSubtitle?: string;
  upperSubtitle?: string;
  article?: string[];
  list?: string[];
  table?: { sign: string; title: string }[];
  inlineList?: {
    inlineSubtitle?: string;
    article?: string[];
  }[];
  titledList?: {
    title?: string;
    upperSubtitle?: string;
    article?: string[];
    list?: string[];
  }[];
}

interface contentProps {
  content: IPageContent[];
}

export const TextContent: React.FC<contentProps> = ({ content }: contentProps): JSX.Element => (
  <TextMainContainer>
    {content?.map((root) => (
      <>
        {root.mainTitle && <TextMainTitle>{root.mainTitle}</TextMainTitle>}
        {root.title && <TextTitle>{root.title}</TextTitle>}
        {root.miniTitle && <TextMiniTitle>{root.miniTitle}</TextMiniTitle>}
        {root.inlineList &&
          root.inlineList.map((list) => (
            <TextDescription>
              <TextSubTitle>{list.inlineSubtitle}</TextSubTitle>
              {list.article}
            </TextDescription>
          ))}
        {root.titledList &&
          root.titledList.map((element) => (
            <Wrap sx={{ marginTop: "2.4rem" }}>
              {element.upperSubtitle && (
                <>
                  <TextSubTitle>{element.upperSubtitle}</TextSubTitle>
                  <br />
                </>
              )}
              {element.article.map((art) => (
                <Wrap sx={{ textAlign: "justify" }}>{art}</Wrap>
              ))}
              {element.list && (
                <TextDescription>
                  {element.list?.map((list) => (
                    <span>
                      {list}
                      <br />
                    </span>
                  ))}
                </TextDescription>
              )}
            </Wrap>
          ))}
        {root.article &&
          root.article.map((ar) => (
            <TextDescription>
              {root.inlineSubtitle && <TextSubTitle>{root.inlineSubtitle}</TextSubTitle>}
              {ar}
            </TextDescription>
          ))}
        {root.table && (
          <Wrap
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "33% 33% 33%",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "5rem 0",
            }}
          >
            {root.table.map((el) => (
              <TextTitle>
                <Wrap sx={{ display: "column", alignItems: "center", width: "100%", textAlign: "center" }}>
                  <Wrap sx={{ fontSize: "5rem", marginBottom: "1rem" }}>{el.sign}</Wrap>
                  <div>{el.title}</div>
                </Wrap>
              </TextTitle>
            ))}
          </Wrap>
        )}
      </>
    ))}
  </TextMainContainer>
);
