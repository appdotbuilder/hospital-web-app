import React, { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from '@inertiajs/react';

interface Room {
    id: number;
    room_number: string;
    type: string;
    status: string;
    formatted_status: string;
    price_per_day?: string;
    floor?: number;
    amenities: string;
    description?: string;
}

interface RoomStat {
    type: string;
    total: number;
    occupied: number;
    available: number;
    maintenance: number;
    occupancy_rate: number;
}

interface Props {
    rooms: Room[];
    roomStats: RoomStat[];
    [key: string]: unknown;
}

export default function Rooms({ rooms, roomStats }: Props) {
    const [selectedType, setSelectedType] = useState<string>('all');
    const [selectedStatus, setSelectedStatus] = useState<string>('all');

    // Filter rooms based on selected filters
    const filteredRooms = rooms.filter((room) => {
        const typeMatch = selectedType === 'all' || room.type === selectedType;
        const statusMatch = selectedStatus === 'all' || room.status === selectedStatus;
        return typeMatch && statusMatch;
    });

    const roomTypes = Array.from(new Set(rooms.map(room => room.type))).sort();
    const roomStatuses = ['available', 'occupied', 'maintenance'];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'available':
                return 'bg-green-100 text-green-800 border-green-300';
            case 'occupied':
                return 'bg-red-100 text-red-800 border-red-300';
            case 'maintenance':
                return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    const getRoomTypeIcon = (type: string) => {
        switch (type) {
            case 'Standard':
                return '🛏️';
            case 'VIP':
                return '👑';
            case 'ICU':
                return '🏥';
            case 'Emergency':
                return '🚑';
            case 'Operating':
                return '⚕️';
            default:
                return '🏨';
        }
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm border-b">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                    🏨 Room Availability
                                </h1>
                                <p className="text-xl text-gray-600">
                                    View current room availability and detailed information
                                </p>
                            </div>
                            <Button asChild variant="outline">
                                <Link href="/">← Back to Home</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    {/* Room Statistics Overview */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Availability Overview</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {roomStats.map((stat) => (
                                <Card key={stat.type} className="hover:shadow-md transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            {getRoomTypeIcon(stat.type)}
                                            {stat.type}
                                        </CardTitle>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Total:</span>
                                                <span className="font-semibold">{stat.total}</span>
                                            </div>
                                            <div className="flex justify-between text-sm text-green-600">
                                                <span>Available:</span>
                                                <span className="font-semibold">{stat.available}</span>
                                            </div>
                                            <div className="flex justify-between text-sm text-red-600">
                                                <span>Occupied:</span>
                                                <span className="font-semibold">{stat.occupied}</span>
                                            </div>
                                            {stat.maintenance > 0 && (
                                                <div className="flex justify-between text-sm text-yellow-600">
                                                    <span>Maintenance:</span>
                                                    <span className="font-semibold">{stat.maintenance}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-4">
                                            <div className="text-xs text-gray-500 mb-1">
                                                Occupancy: {stat.occupancy_rate}%
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full transition-all"
                                                    style={{ width: `${stat.occupancy_rate}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🏠 Detailed Room Information</h2>
                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">Room Type:</label>
                                <Select value={selectedType} onValueChange={setSelectedType}>
                                    <SelectTrigger className="w-40">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Types</SelectItem>
                                        {roomTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {getRoomTypeIcon(type)} {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">Status:</label>
                                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                                    <SelectTrigger className="w-40">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Status</SelectItem>
                                        {roomStatuses.map((status) => (
                                            <SelectItem key={status} value={status}>
                                                {status === 'available' && '✅'} 
                                                {status === 'occupied' && '❌'} 
                                                {status === 'maintenance' && '🔧'} 
                                                {' '}
                                                {status.charAt(0).toUpperCase() + status.slice(1)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="text-sm text-gray-600 flex items-center">
                                Showing {filteredRooms.length} of {rooms.length} rooms
                            </div>
                        </div>
                    </div>

                    {/* Rooms Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredRooms.map((room) => (
                            <Card key={room.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle className="flex items-center gap-2">
                                            {getRoomTypeIcon(room.type)}
                                            Room {room.room_number}
                                        </CardTitle>
                                        <Badge 
                                            variant="outline" 
                                            className={getStatusColor(room.status)}
                                        >
                                            {room.status === 'available' && '✅'} 
                                            {room.status === 'occupied' && '❌'} 
                                            {room.status === 'maintenance' && '🔧'} 
                                            {' '}
                                            {room.formatted_status}
                                        </Badge>
                                    </div>
                                    <CardDescription>
                                        <div className="space-y-1">
                                            <div className="flex justify-between">
                                                <span>Type:</span>
                                                <span className="font-semibold">{room.type}</span>
                                            </div>
                                            {room.floor && (
                                                <div className="flex justify-between">
                                                    <span>Floor:</span>
                                                    <span className="font-semibold">{room.floor}</span>
                                                </div>
                                            )}
                                            {room.price_per_day && (
                                                <div className="flex justify-between">
                                                    <span>Price/Day:</span>
                                                    <span className="font-semibold text-green-600">
                                                        {room.price_per_day}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                
                                <CardContent>
                                    {room.amenities && (
                                        <div className="mb-3">
                                            <div className="text-sm font-semibold text-gray-800 mb-1">
                                                🛏️ Amenities:
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                {room.amenities}
                                            </p>
                                        </div>
                                    )}
                                    
                                    {room.description && (
                                        <div>
                                            <div className="text-sm font-semibold text-gray-800 mb-1">
                                                📝 Description:
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                {room.description}
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredRooms.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No rooms found</h3>
                            <p className="text-gray-600">Try adjusting your filters to see more rooms.</p>
                        </div>
                    )}

                    {/* Contact Information */}
                    <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">
                            🏥 Need to Reserve a Room?
                        </h3>
                        <p className="text-blue-700 mb-6">
                            For room reservations, admissions, or to check real-time availability, please contact our patient services team.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                📞 Call: +1-555-INFO (4636)
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/contact">View All Contact Information</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}