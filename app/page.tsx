import React, {Suspense} from "react";
import TodoList from "./(user)/todos/TodoList";

function Home() {
  return <div>I am the homepage</div>;
  // return (
  //   <>
  //     <Suspense fallback={<p>Loading the Todos-1...</p>}>
  //       {/* @ts-ignore */}
  //       <TodoList />
  //     </Suspense>

  //     <Suspense fallback={<p>Loading the Todos-2...</p>}>
  //       {/* @ts-ignore */}
  //       <TodoList />
  //     </Suspense>
  //   </>
  // );
}

export default Home;
