import Map from './Map'

const dashboard = () => {
  return (
    <div className='h-full'>
      <section className='w-full h-[99%] grid grid-cols-12 gap-3'>

        <div className="rounded-xl bg-muted/50 h-full w-full col-span-4 row-span-12"></div>

        <div className="rounded-xl bg-muted/50 row-span-1 w-full col-span-8"></div>
        <div className="rounded-xl bg-muted/50 row-span-11 w-full col-span-8">
          <Map />
        </div>

      </section>

      <section className="flex items-center justify-between gap-3 mt-4 pb-4">
        <div className="rounded-xl bg-muted/50 h-[25vh] w-full col-span-4"></div>
        <div className="rounded-xl bg-muted/50 h-[25vh] w-full col-span-2"></div>
        <div className="rounded-xl bg-muted/50 h-[25vh] w-full col-span-2"></div>
        <div className="rounded-xl bg-muted/50 h-[25vh] w-full col-span-4"></div>
      </section>
    </div>
  )
}

export default dashboard