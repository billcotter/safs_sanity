'use client'

import { Calendar, Clock, Download, MapPin, Ticket } from 'lucide-react'
import { useSession } from 'next-auth/react'

export default function TicketsPage() {
  const { data: session } = useSession()
  const user = session?.user
  const membership = user?.membership

  // Mock ticket data - replace with actual data from your API
  const mockTickets = [
    {
      id: '1',
      filmTitle: 'The Grand Budapest Hotel',
      screeningDate: '2024-01-15T19:00:00Z',
      venue: 'Flagler College Auditorium',
      seatNumber: 'A12',
      status: 'confirmed',
      ticketType: 'General Admission',
    },
    {
      id: '2',
      filmTitle: 'Parasite',
      screeningDate: '2024-01-20T20:00:00Z',
      venue: 'Corazon Cinema & Cafe',
      seatNumber: 'B8',
      status: 'confirmed',
      ticketType: 'Member Discount',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h1 className="text-3xl font-bold text-charcoal mb-2">My Tickets</h1>
        <p className="text-charcoal/70">
          View and manage your ticket purchases
        </p>
      </div>

      {/* Ticket Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Ticket className="h-8 w-8 text-ocean-blue mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {membership?.ticketCount || 0}
              </p>
              <p className="text-sm text-charcoal/70">Total Tickets</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-terracotta mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {
                  mockTickets.filter(
                    (ticket) => new Date(ticket.screeningDate) > new Date()
                  ).length
                }
              </p>
              <p className="text-sm text-charcoal/70">Upcoming Screenings</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-ochre mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {
                  mockTickets.filter(
                    (ticket) => new Date(ticket.screeningDate) < new Date()
                  ).length
                }
              </p>
              <p className="text-sm text-charcoal/70">Past Screenings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tickets List */}
      <div className="bg-white rounded-lg shadow-sm border border-sandstone-dark">
        <div className="px-6 py-4 border-b border-sandstone-dark">
          <h2 className="text-xl font-semibold text-charcoal">
            Recent Tickets
          </h2>
        </div>

        <div className="divide-y divide-sandstone-dark">
          {mockTickets.length > 0 ? (
            mockTickets.map((ticket) => (
              <div key={ticket.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      {ticket.filmTitle}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-charcoal/70">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-ocean-blue" />
                        <span>
                          {new Date(ticket.screeningDate).toLocaleDateString(
                            'en-US',
                            {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            }
                          )}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-terracotta" />
                        <span>{ticket.venue}</span>
                      </div>

                      <div className="flex items-center">
                        <Ticket className="h-4 w-4 mr-2 text-ochre" />
                        <span>
                          Seat {ticket.seatNumber} • {ticket.ticketType}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <div
                          className={`h-2 w-2 rounded-full mr-2 ${
                            ticket.status === 'confirmed'
                              ? 'bg-green-500'
                              : 'bg-yellow-500'
                          }`}
                        />
                        <span className="capitalize">{ticket.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    <button className="px-3 py-1 text-xs font-medium text-ocean-blue hover:text-ocean-blue-dark transition-colors">
                      View Details
                    </button>
                    <button className="px-3 py-1 text-xs font-medium text-charcoal/70 hover:text-charcoal transition-colors flex items-center">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <Ticket className="mx-auto h-12 w-12 text-charcoal/40 mb-4" />
              <h3 className="text-lg font-medium text-charcoal mb-2">
                No tickets yet
              </h3>
              <p className="text-charcoal/60 mb-4">
                Purchase tickets to see them here
              </p>
              <button className="px-4 py-2 text-sm font-medium text-sandstone bg-ocean-blue hover:bg-ocean-blue-dark rounded-md transition-colors">
                Browse Films
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Upcoming Screenings */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Upcoming Screenings
        </h2>
        <div className="text-center py-8 text-charcoal/60">
          <Calendar className="mx-auto h-12 w-12 mb-4 text-ocean-blue" />
          <p>No upcoming screenings</p>
          <p className="text-sm mt-2">
            Check our events page for new screenings
          </p>
        </div>
      </div>
    </div>
  )
}
