import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from '@inertiajs/react';

export default function About() {
    return (
        <AppShell>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm border-b">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                    ℹ️ About MediCare General Hospital
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Excellence in healthcare since 1985
                                </p>
                            </div>
                            <Button asChild variant="outline">
                                <Link href="/">← Back to Home</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    {/* Hospital Overview */}
                    <div className="mb-12">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">🏥 Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent className="text-lg leading-relaxed text-gray-700">
                                <p className="mb-4">
                                    At MediCare General Hospital, we are committed to providing exceptional healthcare services 
                                    to our community with compassion, excellence, and integrity. Our state-of-the-art facility 
                                    combines advanced medical technology with personalized patient care to ensure the best 
                                    possible outcomes for our patients.
                                </p>
                                <p>
                                    Founded in 1985, we have been serving the healthcare needs of our community for over 
                                    three decades, continuously evolving to meet the changing demands of modern medicine 
                                    while maintaining our core values of patient-centered care.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Key Statistics */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-2">🏆</div>
                                <CardTitle className="text-3xl font-bold text-blue-600">35+</CardTitle>
                                <CardDescription>Years of Excellence</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-2">👨‍⚕️</div>
                                <CardTitle className="text-3xl font-bold text-green-600">200+</CardTitle>
                                <CardDescription>Medical Professionals</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-2">🛏️</div>
                                <CardTitle className="text-3xl font-bold text-purple-600">300+</CardTitle>
                                <CardDescription>Hospital Beds</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-2">👥</div>
                                <CardTitle className="text-3xl font-bold text-orange-600">50K+</CardTitle>
                                <CardDescription>Patients Served Annually</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    {/* Services */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Our Services</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        🚑 Emergency Care
                                    </CardTitle>
                                    <CardDescription>
                                        24/7 emergency services with state-of-the-art trauma center and 
                                        immediate response capabilities for critical care situations.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        ⚕️ Surgery
                                    </CardTitle>
                                    <CardDescription>
                                        Advanced surgical procedures with minimally invasive techniques, 
                                        robotic surgery, and comprehensive pre and post-operative care.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        💓 Cardiology
                                    </CardTitle>
                                    <CardDescription>
                                        Complete cardiovascular care including diagnostics, interventional 
                                        procedures, cardiac rehabilitation, and preventive cardiology.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        🧠 Neurology
                                    </CardTitle>
                                    <CardDescription>
                                        Comprehensive neurological services including stroke care, 
                                        neurosurgery, and treatment for neurological disorders.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        👶 Pediatrics
                                    </CardTitle>
                                    <CardDescription>
                                        Specialized care for infants, children, and adolescents with 
                                        dedicated pediatric units and child-friendly facilities.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        🩺 Internal Medicine
                                    </CardTitle>
                                    <CardDescription>
                                        Comprehensive primary care and management of complex medical 
                                        conditions for adult patients.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>

                    {/* Facilities */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏗️ Facilities & Technology</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>🏥 Patient Care Areas</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">🛏️</Badge>
                                            Private and semi-private patient rooms
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">👑</Badge>
                                            VIP suites with premium amenities
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">🏥</Badge>
                                            Intensive Care Units (ICU)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">🚑</Badge>
                                            Emergency Department
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">⚕️</Badge>
                                            Modern operating theaters
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>🔬 Medical Technology</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">📊</Badge>
                                            Advanced MRI and CT scanning
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">🧬</Badge>
                                            Digital laboratory services
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">💊</Badge>
                                            Automated pharmacy systems
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">📱</Badge>
                                            Electronic health records
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Badge variant="outline">🤖</Badge>
                                            Robotic surgical systems
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Awards & Accreditation */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏆 Awards & Accreditation</h2>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">🏅</div>
                                        <h3 className="font-semibold">Joint Commission Accredited</h3>
                                        <p className="text-sm text-gray-600">Quality and safety certification</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">⭐</div>
                                        <h3 className="font-semibold">5-Star Patient Safety</h3>
                                        <p className="text-sm text-gray-600">CMS Hospital Compare rating</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">🩺</div>
                                        <h3 className="font-semibold">Top 100 Hospitals</h3>
                                        <p className="text-sm text-gray-600">National healthcare awards</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">💚</div>
                                        <h3 className="font-semibold">Magnet Recognition</h3>
                                        <p className="text-sm text-gray-600">Nursing excellence certification</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">🌱</div>
                                        <h3 className="font-semibold">Green Hospital Certified</h3>
                                        <p className="text-sm text-gray-600">Environmental sustainability</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">🔒</div>
                                        <h3 className="font-semibold">HIPAA Compliant</h3>
                                        <p className="text-sm text-gray-600">Patient privacy protection</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center bg-blue-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">
                            Ready to Experience Excellence in Healthcare? 📞
                        </h2>
                        <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                            Whether you need to schedule an appointment, learn more about our services, 
                            or have questions about patient care, our team is here to help you 24/7.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                                <Link href="/contact">Contact Us Today</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/doctors">Meet Our Doctors</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/rooms">View Facilities</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}