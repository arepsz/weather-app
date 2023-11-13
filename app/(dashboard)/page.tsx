import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const content = [
  {
      name: "30°",
      title: "Example",
      description: "Something something"
  },
  {
    name: '2.3"',
    title: "Example",
    description: "Something something"
  },
  {
  name: "6 mi",
  title: "Example",
  description: "Something something"
  },
  {
    name: "82%",
    title: "Example",
    description: "Something something"
  }
]

export default function Home() {
  return (
    <div className='bg-slate-900 h-max w-[60%] m-auto rounded-[2rem] bg-opacity-60'>
        <div className='p-8 flex'>
          <div className='flex flex-col w-[35%] h-max'>
            <input 
              className="flex-auto rounded-full bg-slate-700 px-3 py-2 mb-8 text-white placeholder:text-zinc-400 focus-visible:outline-none"
              placeholder='Budapest'
            />
            <div className='text-white bg-slate-700 rounded-[1rem] flex flex-col justify-center items-center bg-[url(/raining.jpg)] bg-cover'>
              <h1 className='text-8xl pt-16'>
                22°
              </h1>
              <p className='text-4xl mb-8'>
                Rainy day
              </p>
              <p className='text-md'>
                Expect some rainfall in the afternoon
              </p>
              <div className='grid grid-cols-2 mb-6'>
              {content.map((item) =>(
                    <Card key={item.description} className="border-none text-white bg-slate-700 m-2 rounded-[1rem]">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-white text-lg">
                                        {item.name}
                                    </p>
                                    <p className="text-zinc-400 text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
