import { tw } from "twind";


export default function Bio(props: { count: number, name: string, image: string, github: string, linkedin:string}) {

  const BUTTON_STYLE =
    tw`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-yellow-400 mt-4 bottom-0`;
    
  if (props.count % 2 !== 1) {
    return (
    <div class="flex shadow-xl flex-col justify-center min-w-[600px] w-2/5 bg-gray-100 h-72 mx-auto mb-5 border-gray-500 border-solid border-8 rounded-3xl py-1 items-center">
    <div class = "w-11/12 flex flex-row items-center justify-around">
    <section class="flex-1 text-center py-2">
        <img
            src={props.image}
            class="inline border-1 border-solid border-white h-56 w-56 rounded-full"
          />

      </section>
      <section class="flex-1 text-center py-2 relative">
        <div class="flex-1 items-center justify-center min-w-[200px]">
        <h2 class="section-title">{props.name}</h2>
        <p>Software Engineer</p>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            class={tw`${BUTTON_STYLE} mr-4`}
          >
            <img
              src="/icons8-github-100.png"
              class="w-10 h-10 bg-white rounded-full"
            />
          </a>
          <a
            href={props.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class={tw`${BUTTON_STYLE}`}
            mr-4
          >
            <img
              src="/icons8-linkedin-circled-100.png"
              class="w-10 h-10 bg-white rounded-full"
            />
          </a>
        </div>
      </section>
    </div>
 
</div>
    );
  } 

  return (
  <div class="flex flex-col shadow-xl justify-center min-w-[600px] w-2/5 bg-gray-100 h-72 mx-auto mb-5 border-gray-500 border-solid border-8 rounded-3xl py-1 items-center">
    <div class = "w-11/12 flex flex-row items-center justify-around">
      <section class="flex-1 text-center py-2 relative">
        <div class="flex-1 items-center justify-center min-w-[200px]">
        <h2 class="section-title">{props.name}</h2>
        <p>Software Engineer</p>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            class={tw`${BUTTON_STYLE} mr-4`}
          >
            <img
              src="/icons8-github-100.png"
              class="w-10 h-10 bg-white rounded-full"
            />
          </a>
          <a
            href={props.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class={tw`${BUTTON_STYLE}`}
            mr-4
          >
            <img
              src="/icons8-linkedin-circled-100.png"
              class="w-10 h-10 bg-white rounded-full"
            />
          </a>
        </div>
      </section>
      <section class="flex-1 text-center py-2">
        <img
            src={props.image}
            class="inline border-1 border-solid border-white h-56 w-56 rounded-full"
          />

      </section>
    </div>
 
</div>
);

}
