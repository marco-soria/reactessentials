import { CoreConcept } from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

{
  /* {CORE_CONCEPTS.map(({ image, title, description }, index) => (
              <CoreConcept
                key={index}
                image={image}
                title={title}
                description={description}
              />
            ))} */
}
