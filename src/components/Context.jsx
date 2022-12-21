import React, {useContext} from "react";
import { ThemeContext } from "../App";

const Content = () => {
    const theme = useContext(ThemeContext);
    console.log(theme)
  return (
    <div className="content" style={theme}>
      <div className="part_up">
        <p>
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            aspernatur architecto dolorem tenetur ratione iure?
          </strong>
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          modi quam enim corrupti fuga rerum explicabo officiis sit voluptate
          eos quidem optio, accusantium nam, nihil natus tempora molestias aut
          eius quo vitae. Dignissimos natus, autem debitis maiores saepe dolore
          odit?
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias est
          ipsum, harum dolorum unde ab excepturi quasi itaque cum, quo soluta
          praesentium? Praesentium, accusantium quibusdam. Aspernatur eos earum
          perspiciatis quis tempora nulla, officia sunt suscipit, quod dolores
          est quasi nam ipsam sed laborum et! Doloribus quis asperiores fuga
          neque voluptas molestiae harum molestias, veniam aut maxime ullam
          nobis? Voluptatibus, laboriosam?
        </p>
      </div>
      <div className="part_down">
        <p>
            <strong>API</strong>
        </p>

        <pre>
            const MyContext = React.createContext(defaultValue); {"\n"} {"\n"}
            &lt;MyContext.Provider value="{/*some value */}
            "&gt;{"{children}"}&lt;/MyContext.Provider&gt; {"\n"} {"\n"}
            const value = useContext(MyContext);
        </pre>
      </div>
    </div>
  );
};

export default Content;
