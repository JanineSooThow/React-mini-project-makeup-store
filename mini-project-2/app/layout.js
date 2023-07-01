//app/layout.js importing fonts from Font Awesome and config#
//Given these files are common, a layout file makes a perfect place for importing them
//with this setup in place, we can now start using the Font Awesome icons in any individual components or pages needed
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}