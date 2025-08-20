import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from '@inertiajs/react';

interface ContactInfo {
    hospital_name: string;
    address: string;
    phone: string;
    emergency: string;
    email: string;
    website: string;
    hours: Record<string, string>;
    departments: Record<string, string>;
}

interface Props {
    contactInfo: ContactInfo;
    [key: string]: unknown;
}

export default function Contact({ contactInfo }: Props) {
    return (
        <AppShell>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm border-b">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                    📞 Contact Us
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Get in touch with {contactInfo.hospital_name}
                                </p>
                            </div>
                            <Button asChild variant="outline">
                                <Link href="/">← Back to Home</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    {/* Emergency Contact - Prominent */}
                    <div className="mb-8">
                        <Card className="border-red-200 bg-red-50">
                            <CardHeader>
                                <CardTitle className="text-red-800 text-2xl flex items-center gap-2">
                                    🚑 Emergency Services
                                </CardTitle>
                                <CardDescription className="text-red-700 text-lg">
                                    For immediate medical emergencies, call now or come directly to our emergency department
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center">
                                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-xl py-4 px-8">
                                        🚨 Emergency: {contactInfo.emergency}
                                    </Button>
                                    <p className="mt-4 text-red-700 font-semibold">Available 24 hours a day, 7 days a week</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Contact Information */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center gap-2">
                                    🏥 Hospital Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">🏢 Hospital Name</h3>
                                    <p className="text-gray-700 text-lg">{contactInfo.hospital_name}</p>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">📍 Address</h3>
                                    <p className="text-gray-700">{contactInfo.address}</p>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">📞 Main Phone</h3>
                                    <p className="text-gray-700 text-lg font-mono">{contactInfo.phone}</p>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">📧 Email</h3>
                                    <p className="text-gray-700">{contactInfo.email}</p>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">🌐 Website</h3>
                                    <p className="text-gray-700">{contactInfo.website}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center gap-2">
                                    🕒 Hospital Hours
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {Object.entries(contactInfo.hours).map(([service, hours]) => (
                                    <div key={service} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                        <span className="font-semibold text-gray-900">
                                            {service === 'Emergency' && '🚑'} 
                                            {service === 'General Hours' && '🏥'} 
                                            {service === 'Weekend Hours' && '📅'} 
                                            {' '}
                                            {service}
                                        </span>
                                        <Badge 
                                            variant={service === 'Emergency' ? 'destructive' : 'secondary'}
                                            className="text-sm"
                                        >
                                            {hours}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Department Contact Numbers */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">📱 Department Directory</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {Object.entries(contactInfo.departments).map(([department, phone]) => (
                                <Card key={department} className="hover:shadow-md transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            {department === 'Emergency Room' && '🚑'}
                                            {department === 'Patient Information' && 'ℹ️'}
                                            {department === 'Appointments' && '📅'}
                                            {department === 'Billing' && '💳'}
                                            {' '}
                                            {department}
                                        </CardTitle>
                                        <CardDescription className="font-mono text-base">
                                            {phone}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <Card>
                            <CardHeader className="text-center">
                                <div className="text-4xl mb-2">👨‍⚕️</div>
                                <CardTitle>Schedule Appointment</CardTitle>
                                <CardDescription>
                                    Book an appointment with our specialists
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button className="w-full">
                                    📞 Call Appointments
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="text-center">
                                <div className="text-4xl mb-2">🏥</div>
                                <CardTitle>Patient Services</CardTitle>
                                <CardDescription>
                                    Get help with admissions, records, and insurance
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button variant="outline" className="w-full">
                                    📋 Patient Info
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="text-center">
                                <div className="text-4xl mb-2">💳</div>
                                <CardTitle>Billing & Insurance</CardTitle>
                                <CardDescription>
                                    Questions about bills, payments, and coverage
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button variant="outline" className="w-full">
                                    💰 Billing Help
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Location & Directions */}
                    <div className="mb-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center gap-2">
                                    🗺️ Location & Directions
                                </CardTitle>
                                <CardDescription>
                                    Find us easily with these helpful directions and landmarks
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">🚗 Driving Directions</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Located in the Medical District on Healthcare Avenue</li>
                                            <li>• Take Exit 15 from Highway 101</li>
                                            <li>• Follow signs for "Medical Center"</li>
                                            <li>• Free patient parking available on-site</li>
                                            <li>• Valet parking available at main entrance</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">🚌 Public Transportation</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Metro Bus Route 42 stops at hospital entrance</li>
                                            <li>• Medical Center subway station (Blue Line)</li>
                                            <li>• Hospital shuttle service from parking areas</li>
                                            <li>• Accessible entrances and elevators available</li>
                                            <li>• Wheelchair assistance upon request</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-semibold text-blue-900 mb-2">🗺️ Interactive Map</h4>
                                    <p className="text-blue-700">
                                        For detailed directions and real-time traffic updates, search for 
                                        "{contactInfo.hospital_name}" in your preferred maps application.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Additional Services */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    🏨 Patient & Family Services
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">🍽️</Badge>
                                        Cafeteria & dining options
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">🏪</Badge>
                                        Gift shop & pharmacy
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">📺</Badge>
                                        Family waiting areas with Wi-Fi
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">🙏</Badge>
                                        Chapel & spiritual care services
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">👶</Badge>
                                        Pediatric play areas
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    💼 Professional Services
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">👨‍⚕️</Badge>
                                        Physician referrals
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">📄</Badge>
                                        Medical records requests
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">🔬</Badge>
                                        Laboratory services
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">📸</Badge>
                                        Imaging & radiology
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">🏥</Badge>
                                        Outpatient services
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Footer CTA */}
                    <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            We're Here to Help 24/7 🤝
                        </h2>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Whether you have questions about our services, need to schedule an appointment, 
                            or require immediate medical attention, our dedicated team is always ready to assist you.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                                <Link href="/doctors">View Our Doctors</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/about">Learn About Us</Link>
                            </Button>
                            <Button size="lg" variant="outline">
                                📞 {contactInfo.phone}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}