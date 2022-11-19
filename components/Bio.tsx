import { tw } from "twind";

export default function Bio(props: any) {

  const BUTTON_STYLE =
    tw`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-yellow-400 mt-4 bottom-0`;
    
  if (props.count % 2 !== 1) {
    return (
      <div class="flex justify-center min-w-600 w-2/3 bg-gray-100 h-72 mx-auto mb-5 border-gray-500 border-solid border-8 rounded-lg py-1">
        <section class="flex-1 text-center py-2">
          <p>{props.name}</p>
          <img
              src={props.image}
              class="h-10 inline border-1 border-solid border-white h-32 w-32 rounded-full translate-y-1/4"
            />
        </section>
        <section class="flex-1 text-center py-2 relative">
          <p class='mx-4'>{props.description}</p>
          <div class="absolute bottom-0 -translate-x-2/4 left-1/2 min-w-200">
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
    );
  } 

  return (<div class="flex justify-center min-w-600 w-2/3 bg-gray-100 h-72 mx-auto mb-5 border-gray-500 border-solid border-8 rounded-lg py-1">

  <section class="flex-1 text-center py-2 relative">
    <p class='mx-4'>{props.description}</p>
    <div class="absolute bottom-0 -translate-x-2/4 left-1/2 min-w-200">
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
    <p>{props.name}</p>
    <img
        src={props.image}
        class="h-10 inline border-1 border-solid border-white h-32 w-32 rounded-full translate-y-1/4"
      />
  </section>
</div>
);

}
