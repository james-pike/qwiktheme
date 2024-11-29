import { component$, useStore } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



export default component$((props: Props) => {
  const { title = "", subtitle = "", highlight = "", classes = {} } = props;
  
  const gridItemsStore = useStore({
    gridItems: new Array(30).fill(null).map(() => ({
      animationDelay: `${getRandomInt(0, 5)}s`,
      animationDuration: `${getRandomInt(3, 6)}s`,
      shade: getRandomInt(1, 9), // Random shade between 1 and 9
    })),
  });

  return (
    <div class="relative bg-p1 min-h-screen overflow-hidden flex items-center justify-center py-6">
      <div class="grid-background absolute inset-0 grid-animate p-2 -mt-16 grid grid-cols-6 gap-1 transform -skew-y-12 scale-100">
        {gridItemsStore.gridItems.map((item, index) => (
          <div
            key={index}
            class={`bg-p${item.shade} rounded grid-animate`}
            style={{
              animationDelay: item.animationDelay,
              animationDuration: item.animationDuration,
            }}
          />
        ))}
      </div>

      <div class="relative max-w-4xl mx-auto px-5 lg:px-8">
        <div class="max-w-3xl mx-auto lg:mt-24 bg-p1 rounded-lg pt-8 p-6">
          <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
          <div class="sm:max-w-md flex flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start">
          
            <button class="btn w-full bg-p7 text-white p-2">Start Etching</button>
            <button class="btn w-full bg-p3 p-2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
});
