import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface Doctor {
    id: number;
    name: string;
    specialization: string;
    qualification?: string;
    practice_hours: string;
    working_days: string;
    phone?: string;
    email?: string;
    bio?: string;
}

interface Props {
    doctors: Doctor[];
    [key: string]: unknown;
}

export default function Doctors({ doctors }: Props) {
    // Group doctors by specialization
    const doctorsBySpecialization = doctors.reduce((acc, doctor) => {
        const spec = doctor.specialization;
        if (!acc[spec]) {
            acc[spec] = [];
        }
        acc[spec].push(doctor);
        return acc;
    }, {} as Record<string, Doctor[]>);

    const specializations = Object.keys(doctorsBySpecialization).sort();

    return (
        <AppShell>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm border-b">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                    👨‍⚕️ Our Medical Team
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Meet our experienced doctors and their schedules
                                </p>
                            </div>
                            <Button asChild variant="outline">
                                <Link href="/">← Back to Home</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    {/* Summary Stats */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl font-bold text-blue-600">
                                    {doctors.length}
                                </CardTitle>
                                <CardDescription>Total Doctors</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl font-bold text-green-600">
                                    {specializations.length}
                                </CardTitle>
                                <CardDescription>Specializations</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl font-bold text-purple-600">
                                    24/7
                                </CardTitle>
                                <CardDescription>Emergency Care</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl font-bold text-orange-600">
                                    15+
                                </CardTitle>
                                <CardDescription>Years Experience</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    {/* Doctors by Specialization */}
                    <div className="space-y-10">
                        {specializations.map((specialization) => (
                            <div key={specialization}>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="text-3xl mr-3">
                                        {specialization === 'Cardiology' && '❤️'}
                                        {specialization === 'Neurology' && '🧠'}
                                        {specialization === 'Pediatrics' && '👶'}
                                        {specialization === 'Orthopedics' && '🦴'}
                                        {specialization === 'Emergency Medicine' && '🚑'}
                                        {specialization === 'Surgery' && '⚕️'}
                                        {specialization === 'Internal Medicine' && '🩺'}
                                        {!['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Emergency Medicine', 'Surgery', 'Internal Medicine'].includes(specialization) && '👨‍⚕️'}
                                    </span>
                                    {specialization}
                                </h2>
                                
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {doctorsBySpecialization[specialization].map((doctor) => (
                                        <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                                            <CardHeader>
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <CardTitle className="text-xl mb-2">
                                                            {doctor.name}
                                                        </CardTitle>
                                                        <Badge variant="secondary" className="mb-3">
                                                            {doctor.specialization}
                                                        </Badge>
                                                        {doctor.qualification && (
                                                            <p className="text-sm text-gray-600 mb-2">
                                                                {doctor.qualification}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            
                                            <CardContent>
                                                <div className="space-y-3">
                                                    <div className="bg-blue-50 rounded-lg p-3">
                                                        <div className="text-sm font-semibold text-blue-800 mb-1">
                                                            📅 Schedule
                                                        </div>
                                                        <div className="text-sm text-blue-700">
                                                            <div><strong>Hours:</strong> {doctor.practice_hours}</div>
                                                            <div><strong>Days:</strong> {doctor.working_days}</div>
                                                        </div>
                                                    </div>
                                                    
                                                    {(doctor.phone || doctor.email) && (
                                                        <div className="bg-gray-50 rounded-lg p-3">
                                                            <div className="text-sm font-semibold text-gray-800 mb-1">
                                                                📞 Contact
                                                            </div>
                                                            <div className="text-sm text-gray-700 space-y-1">
                                                                {doctor.phone && <div>Phone: {doctor.phone}</div>}
                                                                {doctor.email && <div>Email: {doctor.email}</div>}
                                                            </div>
                                                        </div>
                                                    )}
                                                    
                                                    {doctor.bio && (
                                                        <div>
                                                            <div className="text-sm font-semibold text-gray-800 mb-1">
                                                                ℹ️ About
                                                            </div>
                                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                                {doctor.bio}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Information */}
                    <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">
                            📞 Schedule an Appointment
                        </h3>
                        <p className="text-blue-700 mb-6">
                            To schedule an appointment with any of our doctors, please call our appointment line or visit the contact page.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                📞 Call: +1-555-APPT (2778)
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