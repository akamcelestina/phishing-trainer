import React, { useState } from 'react';


const examples = {
    beginner: [
      // PHISHING #1 - Finance Department Scam
      {
        sender: "finance-payments@company-accounting.net", // Suspicious domain
        subject: "🔴 Urgent: Employee Salary Account Update Required",
        content: (
          <div className="email-content">
            {/* Professional-looking header */}
            <div className="official-header bg-blue-50 p-4 rounded mb-4">
              <img src="/api/placeholder/150/50" alt="Finance Logo" className="mb-2" />
              <div className="font-bold text-xl">Finance Department</div>
              <div className="text-sm text-gray-600">Employee Payment Services</div>
            </div>
            
            {/* Main content with urgency */}
            <div className="mb-4">
              Dear Employee,<br/><br/>
              Our system detected your salary account details need immediate verification 
              due to new banking regulations. Update required within 24 hours to ensure 
              timely payment of your next salary.
            </div>

            {/* Document attachment to appear legitimate */}
            <div className="document-preview bg-gray-50 p-3 rounded mb-4">
              <div className="flex items-center">
                <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                <span>Salary_Account_Update_Form.pdf</span>
              </div>
            </div>

            <button className="w-full bg-red-600 text-white py-2 px-4 rounded">
              Update Account Details Now
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Financial Data Scam",
        telltales: [
          "Non-official domain name",
          "Urgent 24-hour deadline",
          "Generic 'Dear Employee' greeting",
          "Threatens salary delay",
          "External link for sensitive information"
        ],
        behavioralTrigger: "Exploits fear of missing salary payment"
      },

      // LEGITIMATE #1 - IT Support Communication
      {
        sender: "helpdesk@companyname.com", // Actual company domain
        subject: "Password Expiry Notice - Action Required in 7 Days",
        content: (
          <div className="email-content">
            {/* Company branded header */}
            <div className="official-header bg-gray-50 p-4 rounded mb-4">
              <img src="/api/placeholder/150/50" alt="IT Support" className="mb-2" />
              <div className="text-lg font-bold">IT Support Services</div>
            </div>
            
            {/* Clear, professional content */}
            <div className="mb-4">
              Hello [Employee Name],<br/><br/>
              Your network password will expire in 7 days. Please update your password 
              through the internal portal:
              <ul className="list-disc ml-5 mt-2">
                <li>Visit: internal.companyname.com/password</li>
                <li>Login with current credentials</li>
                <li>Choose new password meeting security requirements</li>
              </ul>
            </div>

            {/* Internal contact information */}
            <div className="help-box bg-blue-50 p-3 rounded">
              <p>Need help? Contact IT Support:</p>
              <ul className="list-none mt-2">
                <li>✆ Extension: 1234</li>
                <li>🏢 Office: IT Support Center, Floor 2</li>
              </ul>
            </div>
          </div>
        ),
        isPhishing: false,
        type: "Legitimate IT Communication",
        telltales: [
          "Correct company domain",
          "Reasonable timeframe (7 days)",
          "Internal portal reference",
          "Specific contact information",
          "No urgent threats"
        ],
        behavioralTrigger: "Standard IT security procedure"
      },

// PHISHING #2 - HR Training Scam
      {
        sender: "training@hr-learning-portal.net", // Suspicious external domain
        subject: "⚠️ Mandatory Compliance Training - Final Notice",
        content: (
          <div className="email-content">
            {/* Professional HR header */}
            <div className="department-header bg-red-50 p-4 rounded mb-4">
              <img src="/api/placeholder/150/50" alt="HR Training" className="mb-2" />
              <div className="text-lg font-bold">Human Resources</div>
              <div className="text-sm">Employee Development Division</div>
            </div>

            {/* Urgent message content */}
            <div className="notice-box bg-yellow-50 p-3 rounded mb-4">
              <div className="font-bold">Final Reminder: Action Required Today</div>
              <div className="text-sm mt-2">
                Your mandatory compliance training is overdue. Non-completion may affect 
                your performance review.
              </div>
            </div>

            {/* Training materials */}
            <div className="materials-section mb-4">
              <div className="text-md font-bold mb-2">Required Modules:</div>
              <ul className="list-disc ml-5">
                <li>Data Protection 2024</li>
                <li>Workplace Safety Update</li>
                <li>Code of Conduct Refresh</li>
              </ul>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded">
              Complete Training Now
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Training Compliance Scam",
        telltales: [
          "Non-corporate domain for training",
          "Extreme urgency in tone",
          "Threatens performance review",
          "External training portal",
          "No employee-specific information"
        ],
        behavioralTrigger: "Exploits fear of non-compliance and performance reviews"
      },

      // LEGITIMATE #2 - Project Management Update
      {
        sender: "projectoffice@companyname.com", // Legitimate company domain
        subject: "Q4 Project Status Update - Review Required by Friday",
        content: (
          <div className="email-content">
            {/* Project Office Header */}
            <div className="dept-header bg-blue-50 p-4 rounded mb-4">
              <img src="/api/placeholder/150/50" alt="PMO Logo" className="mb-2" />
              <div className="text-lg font-bold">Project Management Office</div>
              <div className="reference-number text-sm text-gray-600">Ref: PMO-2024-Q4-089</div>
            </div>

            {/* Project update content */}
            <div className="mb-4">
              Dear [Project Team Member],<br/><br/>
              Please review the Q4 project milestones and provide your departmental 
              updates through the internal project portal by Friday, 5 PM.
            </div>

            {/* Attached document preview */}
            <div className="document-section bg-gray-50 p-3 rounded mb-4">
              <div className="flex items-center">
                <img src="/api/placeholder/24/24" alt="Excel" className="mr-2" />
                <span>Q4_Project_Tracker_2024.xlsx</span>
                <span className="text-sm text-gray-500 ml-2">(Internal Document)</span>
              </div>
            </div>

            {/* Action items */}
            <div className="action-items bg-gray-50 p-3 rounded">
              <div className="font-bold mb-2">Required Actions:</div>
              <ul className="list-disc ml-5">
                <li>Review current milestones</li>
                <li>Update completion status</li>
                <li>Add any blockers/risks</li>
              </ul>
            </div>

            {/* Contact information */}
            <div className="contact-info mt-4 text-sm text-gray-600">
              <div>Project Management Office</div>
              <div>Ext: 5432 | Room: 401</div>
            </div>
          </div>
        ),
        isPhishing: false,
        type: "Legitimate Project Communication",
        telltales: [
          "Correct company domain",
          "Internal reference number",
          "Reasonable deadline",
          "Specific project details",
          "Internal contact information"
        ],
        behavioralTrigger: "Normal project management process"
      },

// PHISHING #3 - Executive Office Impersonation
        {
            sender: "ceo-office@company-executive.net",
            subject: "Confidential: Immediate Review Required",
            content: (
                <div className="email-content">
                    {/* Executive Office styling */}
                    <div className="exec-header bg-gray-100 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Executive Office" className="mb-2" />
                        <div className="text-lg font-bold">Office of the Chief Executive</div>
                    </div>

                    <div className="urgent-box bg-red-50 p-3 rounded mb-4">
                        <div className="font-bold">CONFIDENTIAL - URGENT ACTION REQUIRED</div>
                        <div className="text-sm mt-2">Response needed within 30 minutes</div>
                    </div>

                    {/* Message content */}
                    <div className="mb-4">
                        I need you to review and sign off on these confidential documents 
                        immediately. This is regarding the upcoming organizational changes.
                        Do not share this with anyone.
                    </div>

                    {/* Document attachment */}
                    <div className="document-preview bg-gray-50 p-3 rounded mb-4">
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>Confidential_Review_Doc.pdf</span>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
                        Access Confidential Documents
                    </button>
                </div>
            ),
            isPhishing: true,
            type: "Executive Impersonation",
            telltales: [
                "Suspicious executive domain",
                "Extreme urgency (30 minutes)",
                "Unusual executive direct contact",
                "Vague but confidential content",
                "Pressure for immediate action"
            ],
            behavioralTrigger: "Exploits authority and urgency from executive level"
        },

        // LEGITIMATE #3 - Department Budget Review
        {
            sender: "finance.department@companyname.com",
            subject: "Q4 2024 Budget Review - Due Next Week",
            content: (
                <div className="email-content">
                    {/* Finance Department Header */}
                    <div className="finance-header bg-blue-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Finance Department" className="mb-2" />
                        <div className="text-lg font-bold">Finance Department</div>
                        <div className="text-sm text-gray-600">Budget Planning Division</div>
                    </div>

                    {/* Main content */}
                    <div className="mb-4">
                        Dear Department Manager,<br/><br/>
                        Please review and submit your Q4 2024 budget requirements through 
                        the internal finance portal by next Friday, November 24th.
                    </div>

                    {/* Budget document */}
                    <div className="document-section bg-gray-50 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Required Documents:</div>
                        <div className="flex items-center mb-2">
                            <img src="/api/placeholder/24/24" alt="Excel" className="mr-2" />
                            <span>Department_Budget_Template_Q4.xlsx</span>
                        </div>
                    </div>

                    {/* Submission instructions */}
                    <div className="instructions bg-gray-50 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Submission Process:</div>
                        <ol className="list-decimal ml-4">
                            <li>Log into internal finance portal</li>
                            <li>Upload completed budget template</li>
                            <li>Submit for review by Nov 24</li>
                        </ol>
                    </div>

                    {/* Contact information */}
                    <div className="contact-info text-sm text-gray-600">
                        <div>Budget Planning Team</div>
                        <div>Extension: 2345 | Room: 301</div>
                        <div>Internal Portal: finance.companyname.com/budget</div>
                    </div>
                </div>
            ),
            isPhishing: false,
            type: "Legitimate Budget Communication",
            telltales: [
                "Correct company domain",
                "Reasonable deadline",
                "Specific process details",
                "Internal portal reference",
                "Complete contact information"
            ],
            behavioralTrigger: "Standard budget planning process"
        },

// PHISHING #4 - IT Security Update Scam
        {
            sender: "system-security@it-helpdesk-support.net",
            subject: "🚨 Critical Security Vulnerability - Immediate Action Required",
            content: (
                <div className="email-content">
                    {/* IT Security Header */}
                    <div className="security-header bg-red-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="IT Security" className="mb-2" />
                        <div className="text-lg font-bold">IT Security Team</div>
                        <div className="text-sm">System Security Alert</div>
                    </div>

                    {/* Alert Box */}
                    <div className="alert-box bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                        <div className="font-bold text-red-600">CRITICAL SECURITY ALERT</div>
                        <div className="mt-2">
                            Your workstation has been flagged for a critical security 
                            vulnerability. Immediate action required to prevent system lockout.
                        </div>
                    </div>

                    {/* Action Steps */}
                    <div className="steps-box bg-gray-50 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Required Actions:</div>
                        <ol className="list-decimal ml-4">
                            <li>Click the secure link below</li>
                            <li>Enter your network credentials</li>
                            <li>Install security patch</li>
                        </ol>
                    </div>

                    <button className="w-full bg-red-600 text-white py-3 px-4 rounded">
                        Install Security Update Now
                    </button>
                </div>
            ),
            isPhishing: true,
            type: "IT Security Scam",
            telltales: [
                "Non-corporate IT domain",
                "Creates panic with 'critical' alert",
                "Requests network credentials",
                "External security update link",
                "Threatens system lockout"
            ],
            behavioralTrigger: "Exploits fear of security breaches and system access loss"
        },

        // LEGITIMATE #4 - Team Meeting Schedule
        {
            sender: "meetings@companyname.com",
            subject: "Team Meeting Schedule - December 2024",
            content: (
                <div className="email-content">
                    {/* Meeting Header */}
                    <div className="meeting-header bg-blue-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Calendar" className="mb-2" />
                        <div className="text-lg font-bold">Team Meetings</div>
                        <div className="text-sm text-gray-600">Department Communications</div>
                    </div>

                    {/* Meeting Details */}
                    <div className="mb-4">
                        Dear Team Members,<br/><br/>
                        Please review and add these recurring meetings to your calendar. 
                        All meetings will be held in Conference Room A or via internal 
                        video conference system.
                    </div>

                    {/* Schedule Table */}
                    <div className="schedule-box bg-white border rounded-lg p-4 mb-4">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-2 text-left">Meeting</th>
                                    <th className="p-2 text-left">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2">Weekly Status</td>
                                    <td className="p-2">Mondays, 10:00 AM</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Project Review</td>
                                    <td className="p-2">Wednesdays, 2:00 PM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Meeting Links */}
                    <div className="links-box bg-gray-50 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Meeting Access:</div>
                        <ul className="list-disc ml-4">
                            <li>Internal Video Conference: meetings.companyname.com</li>
                            <li>Conference Room A: 4th Floor, West Wing</li>
                        </ul>
                    </div>

                    {/* Calendar Attachment */}
                    <div className="attachment bg-gray-100 p-3 rounded">
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="Calendar" className="mr-2" />
                            <span>December_Team_Meetings.ics</span>
                        </div>
                    </div>
                </div>
            ),
            isPhishing: false,
            type: "Legitimate Meeting Communication",
            telltales: [
                "Official company email domain",
                "Internal meeting system reference",
                "Specific location details",
                "Standard calendar format (.ics)",
                "No urgent action required"
            ],
            behavioralTrigger: "Regular team communication and scheduling"
        },
],

intermediate: [
        // PHISHING #1 - Vendor Payment Update
        {
            sender: "accounts@vendor-payments-update.com",
            subject: "Updated Payment Details - Urgent Action Required",
            content: (
                <div className="email-content">
                    {/* Vendor Header */}
                    <div className="vendor-header bg-gray-100 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Vendor Logo" className="mb-2" />
                        <div className="text-lg font-bold">Global Office Supplies Inc.</div>
                        <div className="text-sm text-gray-600">Accounts Receivable</div>
                    </div>

                    {/* Professional Message */}
                    <div className="message-body mb-4">
                        Dear Accounts Payable Team,<br/><br/>
                        Due to recent banking system upgrades, we need to update our payment 
                        details for all future transactions. Please update your records using 
                        the secure form below to ensure uninterrupted supply of office materials.
                    </div>

                    {/* Document Preview */}
                    <div className="document-preview bg-gray-50 p-3 rounded mb-4">
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>Updated_Banking_Details_2024.pdf</span>
                            <span className="text-red-600 ml-2">(Requires Immediate Update)</span>
                        </div>
                    </div>

                    {/* 'Legitimate' Invoice Details */}
                    <div className="invoice-box bg-blue-50 p-3 rounded mb-4">
                        <div className="font-bold">Recent Transaction Details:</div>
                        <ul className="list-none mt-2">
                            <li>Invoice: INV-2024-8876</li>
                            <li>Amount: $12,450.00</li>
                            <li>Due Date: November 25, 2024</li>
                        </ul>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
                        Update Vendor Payment Details
                    </button>
                </div>
            ),
            isPhishing: true,
            type: "Vendor Payment Fraud",
            telltales: [
                "Generic vendor payment domain",
                "Banking details change request",
                "Specific invoice details to appear legitimate",
                "Pressure to maintain supply chain",
                "External payment update form"
            ],
            behavioralTrigger: "Exploits vendor relationship and supply chain concerns"
        },

        // LEGITIMATE #1 - Internal Audit Notice
        {
            sender: "internal.audit@companyname.com",
            subject: "Annual Department Audit - December 2024",
            content: (
                <div className="email-content">
                    {/* Audit Department Header */}
                    <div className="audit-header bg-blue-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Internal Audit" className="mb-2" />
                        <div className="text-lg font-bold">Internal Audit Department</div>
                        <div className="text-sm text-gray-600">Reference: AUD-2024-12-089</div>
                    </div>

                    {/* Formal Notice */}
                    <div className="notice-body mb-4">
                        Dear Department Head,<br/><br/>
                        This is to inform you that your department has been scheduled for 
                        the annual internal audit in December 2024.
                    </div>

                    {/* Schedule Details */}
                    <div className="schedule-box bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Audit Schedule:</div>
                        <ul className="list-none">
                            <li>Date: December 15-17, 2024</li>
                            <li>Location: Your department area</li>
                            <li>Pre-audit meeting: December 10, 10:00 AM</li>
                        </ul>
                    </div>

                    {/* Required Documents */}
                    <div className="documents-section bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Required Documentation:</div>
                        <ul className="list-disc ml-4">
                            <li>Department process manuals</li>
                            <li>Risk assessment reports</li>
                            <li>Performance metrics</li>
                            <li>Staff training records</li>
                        </ul>
                    </div>

                    {/* Internal Portal Access */}
                    <div className="portal-access bg-blue-50 p-3 rounded mb-4">
                        <div className="font-bold">Document Submission:</div>
                        <div className="text-sm mt-2">
                            Please upload required documents to the internal audit portal:
                            <div className="mt-1">audit.companyname.com/portal</div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info text-sm text-gray-600">
                        <div className="font-bold">Audit Team Contact:</div>
                        <div>Sarah Chen, Lead Auditor</div>
                        <div>Extension: 4567</div>
                        <div>Room: 502, East Wing</div>
                    </div>
                </div>
            ),
            isPhishing: false,
            type: "Legitimate Audit Communication",
            telltales: [
                "Official company email domain",
                "Specific audit reference number",
                "Detailed scheduling information",
                "Internal portal reference",
                "Named contact person with details"
            ],
            behavioralTrigger: "Standard internal audit process"
        },

// PHISHING #2 - Executive Team Strategic Review
        {
            sender: "strategic.review@board-communications.net",
            subject: "Confidential: Strategic Planning Review Required",
            content: (
                <div className="email-content">
                    {/* Executive Header */}
                    <div className="exec-header bg-gray-100 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Executive Office" className="mb-2" />
                        <div className="text-lg font-bold">Strategic Planning Committee</div>
                        <div className="text-sm text-gray-600">Executive Review Board</div>
                    </div>

                    {/* Confidential Notice */}
                    <div className="confidential-box bg-red-50 p-3 rounded mb-4">
                        <div className="font-bold">CONFIDENTIAL - LIMITED DISTRIBUTION</div>
                        <div className="text-sm mt-2">
                            Selected recipients only - Review required by EOD
                        </div>
                    </div>

                    {/* Message Content */}
                    <div className="mb-4">
                        As part of our quarterly strategic review, you have been selected 
                        to provide input on upcoming organizational changes. Your immediate 
                        attention is required for this confidential matter.
                    </div>

                    {/* Document Section */}
                    <div className="document-section bg-gray-50 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Review Documents:</div>
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>Strategic_Review_2024_Q4.pdf</span>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
                        Access Confidential Documents
                    </button>
                </div>
            ),
            isPhishing: true,
            type: "Executive Review Scam",
            telltales: [
                "Non-corporate strategic review domain",
                "Vague but urgent request",
                "Unusual executive communication channel",
                "EOD deadline for strategic review",
                "External document access"
            ],
            behavioralTrigger: "Exploits desire for executive involvement and confidentiality"
        },

        // LEGITIMATE #2 - IT Security Update
        {
            sender: "it.security@companyname.com",
            subject: "Multi-Factor Authentication Update - Action Required by Dec 15",
            content: (
                <div className="email-content">
                    {/* IT Security Header */}
                    <div className="security-header bg-blue-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="IT Security" className="mb-2" />
                        <div className="text-lg font-bold">IT Security Department</div>
                        <div className="text-sm text-gray-600">Security Update: REF-SEC-2024-112</div>
                    </div>

                    {/* Update Notice */}
                    <div className="notice-body mb-4">
                        <p className="mb-3">
                            As part of our ongoing security improvements, we are updating our 
                            Multi-Factor Authentication (MFA) system. This update requires action 
                            from all employees by December 15, 2024.
                        </p>
                        <p>
                            Updates can be completed through the internal security portal 
                            during your regular working hours.
                        </p>
                    </div>

                    {/* Steps Box */}
                    <div className="steps-box bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Required Steps:</div>
                        <ol className="list-decimal ml-4">
                            <li className="mb-2">Log into security.companyname.com</li>
                            <li className="mb-2">Navigate to "MFA Settings"</li>
                            <li className="mb-2">Follow prompts to update authentication</li>
                        </ol>
                    </div>

                    {/* Support Information */}
                    <div className="support-info bg-gray-100 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Need Assistance?</div>
                        <ul className="list-none">
                            <li>IT Support Desk: Extension 1234</li>
                            <li>Walk-in Support: IT Help Center, Room 202</li>
                            <li>Hours: 8:00 AM - 5:00 PM, Monday-Friday</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="resources bg-blue-50 p-3 rounded">
                        <div className="font-bold mb-2">Additional Resources:</div>
                        <ul className="list-disc ml-4">
                            <li>MFA Setup Guide (Internal Wiki)</li>
                            <li>Security Best Practices Guide</li>
                        </ul>
                    </div>
                </div>
            ),
            isPhishing: false,
            type: "Legitimate Security Update",
            telltales: [
                "Official company domain",
                "Specific reference number",
                "Reasonable deadline",
                "Internal portal reference",
                "Multiple support options provided"
            ],
            behavioralTrigger: "Standard security protocol update"
        },

// PHISHING #3 - Client Contract Review
        {
            sender: "contracts@legal-documents-review.net",
            subject: "Urgent Client Contract Amendment Required",
            content: (
                <div className="email-content">
                    {/* Legal Department Header */}
                    <div className="legal-header bg-gray-100 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Legal Department" className="mb-2" />
                        <div className="text-lg font-bold">Legal Department</div>
                        <div className="text-sm text-gray-600">Contract Management Division</div>
                    </div>

                    {/* Time Sensitive Notice */}
                    <div className="notice-box bg-yellow-50 p-3 rounded mb-4">
                        <div className="font-bold text-red-600">TIME SENSITIVE CONTRACT REVIEW</div>
                        <div className="mt-2">
                            Major client requesting immediate contract amendment review.
                            Response required within 3 hours to meet client deadline.
                        </div>
                    </div>

                    {/* Contract Details */}
                    <div className="contract-details bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Contract Information:</div>
                        <ul className="list-none">
                            <li>Client: Global Industries Ltd.</li>
                            <li>Contract ID: GIL-2024-456</li>
                            <li>Amendment Type: Terms & Conditions Update</li>
                        </ul>
                    </div>

                    {/* Document Preview */}
                    <div className="document-preview bg-white border rounded p-3 mb-4">
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>Contract_Amendment_Draft_V2.pdf</span>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
                        Review Contract Amendment
                    </button>
                </div>
            ),
            isPhishing: true,
            type: "Legal Document Scam",
            telltales: [
                "Non-corporate legal domain",
                "Extremely urgent deadline (3 hours)",
                "Vague but important-sounding client",
                "External document review link",
                "Pressure using client expectations"
            ],
            behavioralTrigger: "Exploits fear of losing client and legal compliance"
        },

        // LEGITIMATE #3 - Employee Benefits Update
        {
            sender: "benefits@companyname.com",
            subject: "2025 Benefits Enrollment Period - Opens December 1st",
            content: (
                <div className="email-content">
                    {/* HR Benefits Header */}
                    <div className="benefits-header bg-blue-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="HR Benefits" className="mb-2" />
                        <div className="text-lg font-bold">Employee Benefits</div>
                        <div className="text-sm text-gray-600">Human Resources Department</div>
                    </div>

                    {/* Main Announcement */}
                    <div className="announcement mb-4">
                        <p>
                            The annual benefits enrollment period for 2025 will be open from 
                            December 1st to December 20th, 2024. During this time, you can 
                            review and update your benefits selections through our internal 
                            HR portal.
                        </p>
                    </div>

                    {/* Key Dates Box */}
                    <div className="dates-box bg-green-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Important Dates:</div>
                        <ul className="list-none">
                            <li>Enrollment Opens: December 1, 2024</li>
                            <li>Enrollment Closes: December 20, 2024</li>
                            <li>New Benefits Begin: January 1, 2025</li>
                        </ul>
                    </div>

                    {/* Information Sessions */}
                    <div className="sessions-box bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Benefits Information Sessions:</div>
                        <ul className="list-disc ml-4">
                            <li>In-Person: Dec 5, Conference Room A, 10 AM</li>
                            <li>Virtual: Dec 7, Internal Teams Meeting, 2 PM</li>
                            <li>Virtual: Dec 12, Internal Teams Meeting, 3 PM</li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="resources bg-gray-100 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Available Resources:</div>
                        <ul className="list-none">
                            <li>Benefits Portal: hr.companyname.com/benefits</li>
                            <li>Benefits Help Desk: Extension 3456</li>
                            <li>HR Office: Room 301, East Wing</li>
                        </ul>
                    </div>

                    {/* Attachments */}
                    <div className="attachments bg-gray-50 p-3 rounded">
                        <div className="font-bold mb-2">Reference Documents:</div>
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>2025_Benefits_Overview.pdf</span>
                        </div>
                    </div>
                </div>
            ),
            isPhishing: false,
            type: "Legitimate Benefits Communication",
            telltales: [
                "Official company email domain",
                "Reasonable enrollment timeline",
                "Multiple information sessions offered",
                "Internal portal reference",
                "Complete contact information"
            ],
            behavioralTrigger: "Standard annual benefits enrollment process"
        },

// PHISHING #4 - Performance Review Alert
        {
            sender: "hr-performance@career-evaluation.net",
            subject: "Immediate Action: Performance Review Discrepancy",
            content: (
                <div className="email-content">
                    {/* HR Header */}
                    <div className="hr-header bg-red-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="HR Department" className="mb-2" />
                        <div className="text-lg font-bold">Human Resources</div>
                        <div className="text-sm text-gray-600">Performance Management Team</div>
                    </div>

                    {/* Alert Box */}
                    <div className="alert-box bg-yellow-50 p-3 rounded mb-4">
                        <div className="font-bold text-red-600">URGENT REVIEW REQUIRED</div>
                        <div className="mt-2">
                            A discrepancy has been noted in your recent performance review. 
                            This requires your immediate attention to prevent impact on 
                            upcoming salary adjustments.
                        </div>
                    </div>

                    {/* Review Details */}
                    <div className="review-box bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Review Information:</div>
                        <ul className="list-none">
                            <li>Review Period: Q3 2024</li>
                            <li>Manager: [Your Manager's Name]</li>
                            <li>Status: Pending Resolution</li>
                            <li>Deadline: Today 5 PM</li>
                        </ul>
                    </div>

                    {/* Document Section */}
                    <div className="document-preview bg-white border rounded p-3 mb-4">
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>Performance_Review_Update.pdf</span>
                        </div>
                    </div>

                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded">
                        Review and Update Now
                    </button>
                </div>
            ),
            isPhishing: true,
            type: "Performance Review Scam",
            telltales: [
                "Non-corporate HR domain",
                "Urgent same-day deadline",
                "Threatens salary impact",
                "Vague discrepancy mention",
                "External review portal"
            ],
            behavioralTrigger: "Exploits career and financial concerns"
        },

        // LEGITIMATE #4 - Project Milestone Update
        {
            sender: "project.office@companyname.com",
            subject: "Q4 Project Milestone Updates & Team Review",
            content: (
                <div className="email-content">
                    {/* Project Office Header */}
                    <div className="project-header bg-blue-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Project Office" className="mb-2" />
                        <div className="text-lg font-bold">Project Management Office</div>
                        <div className="text-sm text-gray-600">Reference: PMO-2024-Q4-125</div>
                    </div>

                    {/* Main Message */}
                    <div className="message-body mb-4">
                        Dear Project Team Members,<br/><br/>
                        Please review and update your project milestones for Q4 2024 in 
                        preparation for our end-of-quarter review meeting. Updates should be 
                        completed in the project management portal by December 10th.
                    </div>

                    {/* Project Updates */}
                    <div className="updates-box bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Required Updates:</div>
                        <ul className="list-disc ml-4">
                            <li>Milestone completion status</li>
                            <li>Resource allocation updates</li>
                            <li>Risk assessment review</li>
                            <li>Budget tracking</li>
                        </ul>
                    </div>

                    {/* Meeting Details */}
                    <div className="meeting-box bg-blue-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Review Meeting Details:</div>
                        <ul className="list-none">
                            <li>Date: December 15, 2024</li>
                            <li>Time: 10:00 AM - 12:00 PM</li>
                            <li>Location: Conference Room B / Teams Meeting</li>
                            <li>Meeting ID: PMO-Q4-Review</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="resources bg-gray-100 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Project Resources:</div>
                        <ul className="list-none">
                            <li>Project Portal: projects.companyname.com</li>
                            <li>PMO Support: Extension 4567</li>
                            <li>Documentation: Internal Wiki/PMO</li>
                        </ul>
                    </div>

                    {/* Attachments */}
                    <div className="attachments bg-gray-50 p-3 rounded">
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="Excel" className="mr-2" />
                            <span>Q4_Milestone_Template.xlsx</span>
                        </div>
                    </div>
                </div>
            ),
            isPhishing: false,
            type: "Legitimate Project Communication",
            telltales: [
                "Official company email domain",
                "Specific project reference number",
                "Reasonable deadline",
                "Internal portal reference",
                "Complete meeting details"
            ],
            behavioralTrigger: "Standard project management process"
        },
],

expert: [  // Start expert array
        // PHISHING #1 - Advanced Executive Impersonation
        {
            sender: "ceo.office@companyname-global-corp.com",
            subject: "Re: Confidential Strategic Discussion Follow-up",
            content: (
                <div className="email-content">
                    {/* Executive Office Header */}
                    <div className="exec-header bg-gray-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="CEO Office" className="mb-2" />
                        <div className="text-lg font-bold">Office of the Chief Executive</div>
                        <div className="text-sm text-gray-600">Executive Communications</div>
                    </div>

                    {/* Previous Email Preview */}
                    <div className="prev-email bg-gray-100 p-3 rounded mb-4">
                        <div className="text-sm text-gray-500">
                            --- Original meeting discussion ---<br/>
                            Date: November 12, 2024<br/>
                            Re: Strategic Planning Session
                        </div>
                    </div>

                    {/* Main Message */}
                    <div className="message-content mb-4">
                        Following up on our discussion during yesterday's strategic planning meeting.
                        As mentioned, I need you to review these confidential documents regarding 
                        the upcoming organizational changes. Due to the sensitive nature, I've 
                        secured them in a private executive folder.
                    </div>

                    {/* Document Section */}
                    <div className="document-section bg-blue-50 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Confidential Documents:</div>
                        <div className="flex items-center mb-2">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>Strategic_Reorganization_2025.pdf</span>
                        </div>
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="Excel" className="mr-2" />
                            <span>Financial_Impact_Analysis.xlsx</span>
                        </div>
                    </div>

                    <div className="urgent-note text-sm text-red-600 mb-4">
                        Please review and respond with your input before our 3 PM call with the board.
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
                        Access Executive Documents
                    </button>
                </div>
            ),
            isPhishing: true,
            type: "Sophisticated Executive Impersonation",
            telltales: [
                "Similar but incorrect domain (added 'global-corp')",
                "References vague previous meeting",
                "Creates executive-level urgency",
                "Multiple convincing documents",
                "Time pressure with board meeting reference"
            ],
            behavioralTrigger: "Exploits executive authority and strategic involvement"
        },

// LEGITIMATE #1 - Corporate Acquisition Announcement
        {
            sender: "corporate.communications@companyname.com",
            subject: "Important: Pre-announcement Internal Briefing",
            content: (
                <div className="email-content">
                    {/* Corporate Header */}
                    <div className="corp-header bg-blue-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Corporate Communications" className="mb-2" />
                        <div className="text-lg font-bold">Corporate Communications</div>
                        <div className="text-sm text-gray-600">Reference: CCM-2024-112A</div>
                    </div>

                    {/* Confidentiality Notice */}
                    <div className="confidential-box bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
                        <div className="font-bold mb-2">CONFIDENTIAL - INTERNAL ONLY</div>
                        <div className="text-sm">
                            This information is subject to trading blackout restrictions and 
                            will be publicly announced on November 25, 2024.
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="announcement-content mb-4">
                        <p className="mb-3">
                            The Board of Directors has approved the acquisition of TechCorp 
                            Solutions Inc. Prior to the public announcement, we are conducting 
                            internal briefing sessions for all department heads.
                        </p>
                        
                        <div className="briefing-details bg-white p-3 rounded mb-3">
                            <div className="font-bold mb-2">Briefing Sessions:</div>
                            <ul className="list-none">
                                <li>Date: November 24, 2024</li>
                                <li>Times: 9:00 AM or 2:00 PM EST</li>
                                <li>Location: Executive Conference Center, Room 501</li>
                                <li>Virtual Option: Available via secure internal stream</li>
                            </ul>
                        </div>
                    </div>

                    {/* Required Actions */}
                    <div className="actions-box bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Required Actions:</div>
                        <ol className="list-decimal ml-4">
                            <li>Complete NDA on internal legal portal</li>
                            <li>Select briefing session time slot</li>
                            <li>Review pre-briefing materials</li>
                        </ol>
                    </div>

                    {/* Resources */}
                    <div className="resources bg-gray-100 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Internal Resources:</div>
                        <ul className="list-none text-sm">
                            <li>Legal Portal: legal.companyname.com/nda</li>
                            <li>Briefing Registration: events.companyname.com</li>
                            <li>Support: Corporate Comms (ext. 5566)</li>
                        </ul>
                    </div>

                    {/* Attachments */}
                    <div className="attachment-preview bg-gray-50 p-3 rounded">
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>Pre_Briefing_Overview.pdf</span>
                            <span className="text-sm text-gray-500 ml-2">(Internal Document)</span>
                        </div>
                    </div>
                </div>
            ),
            isPhishing: false,
            type: "Legitimate Corporate Communication",
            telltales: [
                "Official corporate email domain",
                "Formal reference number",
                "Internal-only systems referenced",
                "Specific detailed timeline",
                "Multiple verification steps required",
                "Complete internal contact details"
            ],
            behavioralTrigger: "Standard corporate merger/acquisition process"
        },

// PHISHING #2 - Sophisticated Supply Chain Attack
        {
            sender: "supplier.management@trusted-vendor-portal.net",
            subject: "Critical: Supply Chain Security Update Required",
            content: (
                <div className="email-content">
                    {/* Vendor Management Header */}
                    <div className="vendor-header bg-gray-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Vendor Management" className="mb-2" />
                        <div className="text-lg font-bold">Supply Chain Management</div>
                        <div className="text-sm text-gray-600">Vendor Security Division</div>
                    </div>

                    {/* Security Alert */}
                    <div className="alert-box bg-yellow-50 p-4 rounded mb-4">
                        <div className="font-bold text-red-800">SECURITY PROTOCOL UPDATE</div>
                        <div className="mt-2">
                            As part of our enhanced supply chain security measures, all vendor 
                            integration systems require immediate security certificate renewal.
                        </div>
                    </div>

                    {/* Previous Transaction Context */}
                    <div className="context-box bg-gray-100 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Recent Transaction History:</div>
                        <ul className="list-none text-sm">
                            <li>Last Order: PO-2024-8867</li>
                            <li>Amount: $157,892.45</li>
                            <li>Status: Pending Security Verification</li>
                        </ul>
                    </div>

                    {/* Verification Process */}
                    <div className="process-box bg-white border rounded p-4 mb-4">
                        <div className="font-bold mb-2">Required Steps:</div>
                        <ol className="list-decimal ml-4">
                            <li className="mb-2">Update security certificates</li>
                            <li className="mb-2">Verify vendor credentials</li>
                            <li className="mb-2">Confirm payment systems integration</li>
                        </ol>
                    </div>

                    <div className="warning-note text-sm text-red-600 mb-4">
                        Note: Pending transactions will be held until security update is completed.
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
                        Complete Security Update
                    </button>
                </div>
            ),
            isPhishing: true,
            type: "Supply Chain Security Scam",
            telltales: [
                "Generic vendor portal domain",
                "References real-looking PO number",
                "Financial pressure tactic",
                "Certificate renewal urgency",
                "External verification system"
            ],
            behavioralTrigger: "Exploits supply chain security concerns and financial impact"
        },

        // LEGITIMATE #3 - Risk Management Assessment
        {
            sender: "risk.management@companyname.com",
            subject: "2025 Department Risk Assessment - Due December 20",
            content: (
                <div className="email-content">
                    {/* Risk Management Header */}
                    <div className="risk-header bg-blue-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Risk Management" className="mb-2" />
                        <div className="text-lg font-bold">Enterprise Risk Management</div>
                        <div className="text-sm text-gray-600">Reference: RMD-2024-Q4-089</div>
                    </div>

                    {/* Main Notice */}
                    <div className="notice-content mb-4">
                        <p>
                            As part of our annual enterprise risk assessment process, each 
                            department is required to complete a comprehensive risk evaluation 
                            for the upcoming year.
                        </p>
                    </div>

                    {/* Assessment Details */}
                    <div className="assessment-box bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Required Assessments:</div>
                        <ul className="list-disc ml-4">
                            <li>Operational Risk Evaluation</li>
                            <li>Compliance Risk Assessment</li>
                            <li>Technology Risk Review</li>
                            <li>Financial Impact Analysis</li>
                        </ul>
                    </div>

                    {/* Timeline */}
                    <div className="timeline-box bg-blue-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Key Dates:</div>
                        <ul className="list-none">
                            <li>Initial Assessment Due: Dec 20, 2024</li>
                            <li>Review Meetings: Jan 8-12, 2025</li>
                            <li>Final Submission: Jan 20, 2025</li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="resources bg-gray-100 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Available Resources:</div>
                        <ul className="list-none text-sm">
                            <li>Risk Portal: risk.companyname.com</li>
                            <li>Reference Materials: Internal Wiki/Risk</li>
                            <li>Support Team: risk.support@companyname.com</li>
                        </ul>
                    </div>

                    {/* Attached Documents */}
                    <div className="attachments bg-gray-50 p-3 rounded">
                        <div className="font-bold mb-2">Assessment Templates:</div>
                        <div className="flex items-center mb-2">
                            <img src="/api/placeholder/24/24" alt="Excel" className="mr-2" />
                            <span>Risk_Assessment_Template_2025.xlsx</span>
                        </div>
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>Risk_Assessment_Guide.pdf</span>
                        </div>
                    </div>
                </div>
            ),
            isPhishing: false,
            type: "Legitimate Risk Assessment",
            telltales: [
                "Official company domain",
                "Detailed reference number",
                "Reasonable timelines",
                "Internal resources referenced",
                "Comprehensive documentation",
                "Multiple verification steps"
            ],
            behavioralTrigger: "Standard annual risk assessment process"
        },

// PHISHING #4 - Board Meeting Credentials
        {
            sender: "board.secretary@companyname-secure.net",
            subject: "Re: Virtual Board Meeting Access Update",
            content: (
                <div className="email-content">
                    {/* Board Header */}
                    <div className="board-header bg-gray-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Board Secretary" className="mb-2" />
                        <div className="text-lg font-bold">Board of Directors Office</div>
                        <div className="text-sm text-gray-600">Meeting ID: BOD-2024-Q4</div>
                    </div>

                    {/* Previous Thread */}
                    <div className="prev-email bg-gray-100 p-3 rounded mb-4 text-sm">
                        <div className="font-bold">Previous Discussion:</div>
                        <div className="mt-1">
                            Re: Q4 Board Meeting - Virtual Access Requirements
                            <br />
                            Date: November 15, 2024
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="message-body mb-4">
                        Following the updated security protocols, your board meeting credentials 
                        require immediate verification before tomorrow's session. This ensures 
                        compliance with new governance requirements.
                    </div>

                    {/* Meeting Details */}
                    <div className="meeting-box bg-blue-50 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Meeting Information:</div>
                        <ul className="list-none">
                            <li>Date: November 20, 2024</li>
                            <li>Time: 9:00 AM EST</li>
                            <li>Platform: Secure Board Portal</li>
                        </ul>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
                        Verify Board Access Credentials
                    </button>
                </div>
            ),
            isPhishing: true,
            type: "Board Access Scam",
            telltales: [
                "Similar but incorrect domain (-secure.net)",
                "Urgent credential verification",
                "Vague security protocol reference",
                "External verification link",
                "Governance requirement pressure"
            ],
            behavioralTrigger: "Exploits board meeting importance and compliance requirements"
        },

        // LEGITIMATE #4 - Regulatory Compliance Update
        {
            sender: "compliance@companyname.com",
            subject: "Updated Data Protection Requirements - Training Required",
            content: (
                <div className="email-content">
                    {/* Compliance Header */}
                    <div className="compliance-header bg-blue-50 p-4 rounded mb-4">
                        <img src="/api/placeholder/150/50" alt="Compliance" className="mb-2" />
                        <div className="text-lg font-bold">Regulatory Compliance Department</div>
                        <div className="text-sm text-gray-600">Reference: COMP-2024-DP-127</div>
                    </div>

                    {/* Main Notice */}
                    <div className="notice-content mb-4">
                        <p className="mb-3">
                            Recent updates to data protection regulations require all employees 
                            to complete additional training modules by January 15, 2025.
                        </p>
                    </div>

                    {/* Training Requirements */}
                    <div className="training-box bg-gray-50 p-4 rounded mb-4">
                        <div className="font-bold mb-2">Required Modules:</div>
                        <ul className="list-disc ml-4">
                            <li>Data Classification Update (30 min)</li>
                            <li>Information Handling Procedures (45 min)</li>
                            <li>Incident Response Protocol (30 min)</li>
                        </ul>
                    </div>

                    {/* Completion Process */}
                    <div className="process-box bg-white border rounded p-4 mb-4">
                        <div className="font-bold mb-2">Steps to Complete:</div>
                        <ol className="list-decimal ml-4">
                            <li>Access internal learning portal</li>
                            <li>Complete all modules</li>
                            <li>Sign updated compliance acknowledgment</li>
                        </ol>
                    </div>

                    {/* Resources */}
                    <div className="resources bg-gray-100 p-3 rounded mb-4">
                        <div className="font-bold mb-2">Available Resources:</div>
                        <ul className="list-none">
                            <li>Learning Portal: training.companyname.com</li>
                            <li>Support: compliance.support@companyname.com</li>
                            <li>Help Desk: Extension 3344</li>
                        </ul>
                    </div>

                    {/* Attachments */}
                    <div className="attachments bg-gray-50 p-3 rounded">
                        <div className="flex items-center">
                            <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                            <span>Data_Protection_Updates_2025.pdf</span>
                        </div>
                    </div>
                </div>
            ),
            isPhishing: false,
            type: "Legitimate Compliance Communication",
            telltales: [
                "Official company domain",
                "Specific reference number",
                "Reasonable timeline",
                "Internal portal reference",
                "Complete support information",
                "Detailed training requirements"
            ],
            behavioralTrigger: "Standard regulatory compliance process"
        }
    ]  // Close expert array
};   // Close examples object

// After the examples object, add the App component:

const App = () => {
  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [difficulty, setDifficulty] = useState('beginner');
  const [gameStarted, setGameStarted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [answers, setAnswers] = useState([]);

  // Handle difficulty selection
  const handleDifficultySelect = (level) => {
    setDifficulty(level);
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setShowFeedback(false);
    setShowSummary(false);
  };

  // Handle user's answer
  const handleAnswer = (answer) => {
    const currentExample = examples[difficulty][currentQuestion];
    const correct = answer === currentExample.isPhishing;
    if (correct) {
      setScore(score + 1);
    }
    setAnswers([...answers, {
      question: currentQuestion + 1,
      correct,
      email: currentExample
    }]);
    setShowFeedback(true);
  };

  // Move to next question
  const nextQuestion = () => {
    if (currentQuestion < examples[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    } else {
      setShowSummary(true);
    }
  };

  // Calculate score percentage
  const calculatePercentage = () => {
    return Math.round((score / examples[difficulty].length) * 100);
  };

  // Show difficulty selection screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Email Security Training</h1>
            <h2 className="text-lg text-gray-600 text-center mb-8">Select Your Difficulty Level</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleDifficultySelect('beginner')}
                className="w-full p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium"
              >
                Beginner
              </button>
              <button
                onClick={() => handleDifficultySelect('intermediate')}
                className="w-full p-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium"
              >
                Intermediate
              </button>
              <button
                onClick={() => handleDifficultySelect('expert')}
                className="w-full p-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium"
              >
                Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show final summary
  if (showSummary) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Training Summary</h1>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">{calculatePercentage()}%</div>
              <div className="text-gray-600">Final Score: {score}/{examples[difficulty].length}</div>
            </div>
            
            <div className="space-y-4 mb-6">
              {answers.map((answer, index) => (
                <div key={index} className={`p-4 rounded-lg ${answer.correct ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className="font-bold">{`Question ${answer.question}`}</div>
                  <div className="text-sm text-gray-600">{answer.email.subject}</div>
                  <div className="text-sm">{answer.correct ? '✓ Correct' : '✗ Incorrect'}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleDifficultySelect(difficulty)}
              className="w-full p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
            >
              Try Again
            </button>
            <button
              onClick={() => setGameStarted(false)}
              className="w-full mt-4 p-4 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium"
            >
              Change Difficulty
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show main training interface
  const example = examples[difficulty][currentQuestion];
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Email Security Trainer</h1>
            <div className="flex flex-col items-end">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-2">
                Score: {score}/{currentQuestion + 1}
              </span>
              <span className={`text-sm px-2 py-1 rounded ${
                difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mode
              </span>
            </div>
          </div>

          <div className="border rounded-lg p-4 mb-6 bg-gray-50">
            <div className="text-sm text-gray-600 break-all">From: {example.sender}</div>
            <div className="font-bold mt-2">{example.subject}</div>
            <div className="mt-4">{example.content}</div>
          </div>

          {!showFeedback && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer(true)}
                className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium"
              >
                Mark as Phishing
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium"
              >
                Mark as Legitimate
              </button>
            </div>
          )}

          {showFeedback && (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${example.isPhishing ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                <div className="font-bold mb-2">
                  This is {example.isPhishing ? 'a phishing email' : 'a legitimate email'}
                </div>
                <div className="text-sm">Type: {example.type}</div>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Key Indicators:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {example.telltales.map((telltale, index) => (
                    <li key={index}>{telltale}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={nextQuestion}
                className="w-full mt-4 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
              >
                {currentQuestion < examples[difficulty].length - 1 ? 'Next Example →' : 'Finish'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

