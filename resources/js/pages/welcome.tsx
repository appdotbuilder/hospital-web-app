import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from '@inertiajs/react';

interface Doctor {
    id: number;
    name: string;
    specialization: string;
    qualification?: string;
    practice_hours: string;
    working_days: string;
    phone?: string;
    bio?: string;
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
    doctors?: Doctor[];
    roomStats?: RoomStat[];
    [key: string]: unknown;
}

export default function Welcome({ doctors = [], roomStats = [] }: Props) {
    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl font-bold mb-6">
                                🏥 MediCare General Hospital
                            </h1>
                            <p className="text-xl mb-8 text-blue-100">
                                Providing exceptional healthcare services with state-of-the-art facilities and experienced medical professionals
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                    <Link href="/doctors">👨‍⚕️ View Doctors</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                                    <Link href="/rooms">🏨 Room Availability</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                                    <Link href="/contact">📞 Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    {/* Key Features */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-4">👨‍⚕️</div>
                                <CardTitle>Expert Medical Staff</CardTitle>
                                <CardDescription>
                                    Board-certified doctors across multiple specializations
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-4">🏨</div>
                                <CardTitle>Modern Facilities</CardTitle>
                                <CardDescription>
                                    State-of-the-art rooms and medical equipment
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-4">🚑</div>
                                <CardTitle>24/7 Emergency Care</CardTitle>
                                <CardDescription>
                                    Round-the-clock emergency services and critical care
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    {/* Doctor Schedule Preview */}
                    <div className="mb-16">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">👨‍⚕️ Our Medical Team</h2>
                            <Button asChild variant="outline">
                                <Link href="/doctors">View All Doctors →</Link>
                            </Button>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {doctors.slice(0, 6).map((doctor) => (
                                <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                                        <CardDescription>
                                            <Badge variant="secondary" className="mb-2">
                                                {doctor.specialization}
                                            </Badge>
                                            <div className="text-sm space-y-1">
                                                <div><strong>Hours:</strong> {doctor.practice_hours}</div>
                                                <div><strong>Days:</strong> {doctor.working_days}</div>
                                                {doctor.phone && (
                                                    <div><strong>Phone:</strong> {doctor.phone}</div>
                                                )}
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                    {doctor.bio && (
                                        <CardContent>
                                            <p className="text-sm text-gray-600 line-clamp-3">
                                                {doctor.bio}
                                            </p>
                                        </CardContent>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Room Availability Overview */}
                    <div className="mb-16">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">🏨 Room Availability</h2>
                            <Button asChild variant="outline">
                                <Link href="/rooms">View All Rooms →</Link>
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {roomStats.map((stat) => (
                                <Card key={stat.type}>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{stat.type} Rooms</CardTitle>
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
                                        <div className="mt-3">
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

                    {/* Quick Actions */}
                    <div className="text-center bg-gray-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
                        <p className="text-gray-600 mb-6">
                            Our staff is available 24/7 for emergencies and urgent care needs
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700">
                                🚑 Emergency: +1-555-911-HELP
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/contact">📞 General Information</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/about">ℹ️ About Our Hospital</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}