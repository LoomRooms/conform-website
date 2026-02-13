"use client";

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";

type EventItem = {
    time: string;
    title: string;
    location?: string;
    description?: string;
    type: "keynote" | "panel" | "workshop" | "performance" | "break" | "other";
};

type DaySchedule = {
    date: string;
    title: string;
    subtitle: string;
    events: EventItem[];
};

const scheduleData: DaySchedule[] = [
    {
        date: "Day 1 | March 20",
        title: "CONFERENCE",
        subtitle: "Deconstruct & Challenge",
        events: [
            { time: "09:00 AM", title: "Registration & Networking", type: "break" },
            { time: "10:00 AM", title: "Opening Ceremony", description: "Traditional Blessing by Elegbeda of Egbeda", type: "other" },
            { time: "11:00 AM", title: "Keynote: Future of African Creativity", location: "Main Hall", type: "keynote" },
            { time: "12:30 PM", title: "Panel: Breaking into the Industry", location: "Main Hall", type: "panel" },
            { time: "02:00 PM", title: "Lunch Break & Networking", type: "break" },
            { time: "03:30 PM", title: "Workshops: Film, Music, Fashion, Art", location: "Breakout Rooms", type: "workshop" },
            { time: "05:00 PM", title: "Closing Remarks & Day 2 Preview", type: "other" },
        ],
    },
    {
        date: "Day 2 | March 21",
        title: "PERFORMANCE",
        subtitle: "Rebuild & Express",
        events: [
            { time: "06:00 PM", title: "Doors Open & Art Exhibition", type: "other" },
            { time: "07:00 PM", title: "Film Screenings", description: "Short films by Loom Rooms Alumni", type: "performance" },
            { time: "08:00 PM", title: "Live Music Performances", type: "performance" },
            { time: "09:00 PM", title: "Fashion Runway Show", type: "performance" },
            { time: "10:00 PM", title: "After-Party & Celebration", type: "break" },
        ],
    },
];

export default function Timeline() {
    const [activeDay, setActiveDay] = useState(0);

    return (
        <div className="py-12">
            {/* Day Toggles */}
            <div className="flex justify-center mb-12 space-x-4">
                {scheduleData.map((day, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveDay(index)}
                        className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all border-2 ${activeDay === index
                                ? "bg-primary border-primary text-white shadow-lg transform scale-105"
                                : "bg-white border-gray-200 text-gray-500 hover:border-primary hover:text-primary"
                            }`}
                    >
                        {day.date}
                    </button>
                ))}
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="font-heading font-bold text-3xl mb-2">{scheduleData[activeDay].title}</h3>
                    <p className="text-gray-500">{scheduleData[activeDay].subtitle}</p>
                </div>

                <div className="relative border-l-2 border-primary/20 ml-4 md:ml-10 space-y-8">
                    {scheduleData[activeDay].events.map((event, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm transition-colors ${event.type === "break" ? "bg-gray-300" : "bg-primary"
                                }`}></div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <div className="flex items-center text-primary font-bold mb-2 md:mb-0">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {event.time}
                                    </div>
                                    {event.location && (
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            {event.location}
                                        </div>
                                    )}
                                </div>
                                <h4 className="font-bold text-xl mb-1">{event.title}</h4>
                                {event.description && <p className="text-gray-500 text-sm">{event.description}</p>}

                                <span className={`inline-block mt-3 px-2 py-1 text-xs font-bold uppercase rounded ${event.type === "keynote" ? "bg-blue-100 text-blue-700" :
                                        event.type === "performance" ? "bg-purple-100 text-purple-700" :
                                            event.type === "break" ? "bg-gray-100 text-gray-600" :
                                                "bg-orange-100 text-orange-700"
                                    }`}>
                                    {event.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
