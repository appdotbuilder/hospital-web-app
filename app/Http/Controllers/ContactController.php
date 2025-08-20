<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function index()
    {
        $contactInfo = [
            'hospital_name' => 'MediCare General Hospital',
            'address' => '123 Healthcare Avenue, Medical District, City 12345',
            'phone' => '+1-555-HOSPITAL (+1-555-467-7482)',
            'emergency' => '+1-555-911-HELP (+1-555-911-4357)',
            'email' => 'info@medicarehosp.com',
            'website' => 'www.medicarehosp.com',
            'hours' => [
                'Emergency' => '24/7',
                'General Hours' => 'Monday - Friday: 6:00 AM - 10:00 PM',
                'Weekend Hours' => 'Saturday - Sunday: 8:00 AM - 8:00 PM',
            ],
            'departments' => [
                'Emergency Room' => '+1-555-EMERGENCY',
                'Patient Information' => '+1-555-INFO',
                'Appointments' => '+1-555-APPT',
                'Billing' => '+1-555-BILLING',
            ],
        ];

        return Inertia::render('contact', [
            'contactInfo' => $contactInfo,
        ]);
    }
}