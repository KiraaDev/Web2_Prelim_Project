import Actions from './components/Actions'
import Header from './components/Header'
import Todos from './components/Todos'

function App() {

  const todos = [
    {
      title: "Learn ReactJS",
      description: "Learn the basic fundamentals of reactjs"
    },
    {
      title: "Create To-do list",
      description: "This is prelim project for web systems 2"
    },
    {
      title: "Build a Portfolio Website",
      description: "Create a personal portfolio to showcase projects and skills"
    },
    {
      title: "Develop a Weather App",
      description: "Build a simple weather application using an API to fetch real-time data sdf sdfasdfasd asdas dasdasd"
    },
  ]

  return (
    <>
      <div className="flex h-svh justify-center items-center">
        <div className='flex flex-col gap-5 w-[30%]'>
          <Header />
          <Todos
            todos={todos}
          />
          <Actions />
        </div>
      </div>
    </>
  )
}

export default App
