import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  // {
  //   title: "Developer Docs",
  //   Svg: require("@site/static/img/flying.svg").default,
  //   description: (
  //     <>
  //       See developer examples in a format similar to the experience designed
  //       for engineers and tinkerers.
  //     </>
  //   ),
  // },
  // {
  //   title: "Tech Specs",
  //   Svg: require("@site/static/img/product.svg").default,
  //   description: (
  //     <>
  //       See Technical Specifications produced for Audio/Video engineers—with
  //       optional links to public copy.
  //     </>
  //   ),
  // },
  // {
  //   title: "Product Docs",
  //   Svg: require("@site/static/img/UI.svg").default,
  //   description: (
  //     <>
  //       View a range of product documentation from Amazon Ads products (with
  //       optional links to published content) to data visualizations, and more.
  //     </>
  //   ),
  // },
];

// function Feature({ Svg, title, description }) {
//   return (
//     <div className={clsx("col col--4")}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
