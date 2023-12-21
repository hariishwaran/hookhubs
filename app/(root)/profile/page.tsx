import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const page = async() => {
    const {sessionClaims} = auth();
    const userId = sessionClaims?.userId as string;
    const organizedEvents = await getEventsByUser({userId, page: 1})
  return (
    <>
        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
            <div className='wrapper flex items-center justify-center sm:justify-between'>
                <h3 className='h3-bold text-center sm:text-left'>My Tickets</h3>
                {/* asChild - Create a link that looks like a Button */}
                <Button asChild className='button hidden sm:flex' size="lg">
                    <Link href='/#events'>Explore More Events</Link>
                </Button>
            </div>
        </section>
        {/* <section className='wrapper my-8'>
            <Collection data={relatedevents?.data} emptyTitle="No Events Tickets Purchased Yet" emptyStateSubtext = "No Worry! Plenty Of Exciting Events To Explore" collectionType = "My_Tickets" limit={3} page={1} urlParamName='ordersPage' totalPages={2}/>
        </section> */}
        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
            <div className='wrapper flex items-center justify-center sm:justify-between'>
                <h3 className='h3-bold text-center sm:text-left'>Events Organized</h3>
                {/* asChild - Create a link that looks like a Button */}
                <Button asChild className='button hidden sm:flex' size="lg">
                    <Link href='/events/create'>Create New Event</Link>
                </Button>
            </div>
        </section>
        <section className="wrapper my-8">
            <Collection data={organizedEvents?.data} emptyTitle="No Events Created" emptyStateSubtext = "Go Create One!" collectionType = "Events_Organized" limit={3} page={1} urlParamName='eventsPage' totalPages={2}/>
        </section>
    </>
  )
}

export default page