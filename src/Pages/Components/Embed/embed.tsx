import { embed_create } from "../../../../types/embed_create"
import styles from "./embed.module.css"


const Embed = ({
  author,
  image,
  provider,
  thumbnail,
  title,
  video,
  color,
  description,
  fields,
  footer,
  timestamp,
  type,
  url,
}: embed_create) => {
  const hex = color?.toString(16);
  console.log(type)

  return (
    <>
      {
        type === "rich" ? (
          <div
            className={styles.container}
            style={{
              borderColor: hex === undefined || null ? `#000` : `#${hex}`,
            }}
          >
            {
              author ? <div className={styles.author}>{author.name}</div> : ""
            }

            {
              title ? <div className={styles.title}>{title}</div> : ""
            }

            {
              description ? (
                <div className={styles.description}>
                  <p>{description}</p>
                </div>
            ) : ("")
            }

            {
              !image ? ("") : (
                <div className={styles.embedImage}>
                  <img src={image.url} alt="alt text" />
                </div>
              )
            }

            {
              thumbnail ? (
                <div className={styles.embedImage}>
                  <img src={thumbnail.url} alt="alt text" />
                </div>
              ) : ("")
            }
          </div>
        ) : (
          ""
        )
      }

      {
        type === "image" ? (
          <div>
            <img src={url} alt="" className={styles.image} />
          </div>
        ) : ("")
      }

      {
        type === "article" ? (
          <div
          className={styles.container}
          style={{ borderColor: `#${color}` }}>

            {
              author ? <div className={styles.author}>{author.name}</div> : ""
            }

            {
              title ? <div className={styles.title}>{title}</div> : ""
            }
          
            {
              description ? (
                <div className={styles.description}>
                  <p>{description}</p>
                </div>
              ) : ("")
            }

            {
              !image ? ("") : (
                <div className={styles.embedImage}>
                  <img src={image.url} alt="alt text" />
                </div>
              )
            }

            {
              thumbnail ? (
                <div className={styles.embedImage}>
                  <img src={thumbnail.url} alt="alt text" />
                </div>
              ) : (null)
            }

          </div>
        ) : ("")
      }
    </>
  );
}

export default Embed