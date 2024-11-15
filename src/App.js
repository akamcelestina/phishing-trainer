import React, { useState } from 'react';


const examples = {
    beginner: [
      {
        sender: "bonus-team@companypayroll.net",
        subject: "🎉 Your Performance Bonus is Ready!",
        content: (
          <div className="email-content">
            <div className="mb-4">
              Congratulations! Due to your outstanding performance, you've earned a special bonus.
            </div>
            <div className="bg-green-50 p-3 rounded mb-4">
              <div className="font-medium text-green-800">Bonus Amount: $2,450.00</div>
              <div className="text-sm text-green-600">Reference: BON-2024-0389</div>
            </div>
            <div className="mb-4">
              Click the secure link below to claim your bonus before the deadline:
            </div>
            <a href="#" className="text-blue-600 hover:underline">
              http://payroll-bonus.com/claim
            </a>
          </div>
        ),
        isPhishing: true,
        type: "Financial Reward Scam",
        telltales: [
          "Unexpected financial reward",
          "Creates urgency with deadline",
          "Suspicious external domain",
          "Too good to be true offer",
          "Generic sender name"
        ],
        behavioralTrigger: "Exploits desire for financial gain and FOMO"
      },
      {
        sender: "amazon-shipping@delivery-status.net",
        subject: "📦 Package Delivery Failed - Action Required",
        content: (
          <div className="email-content">
            <div className="shipping-alert bg-yellow-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-yellow-800">Delivery Attempt Failed</div>
              <div className="mt-2">
                Order #: AMZ-98765-X2
                <br />
                Delivery Attempt: Feb 12, 2024
                <br />
                Status: Return to Sender Pending
              </div>
            </div>
            <div className="mb-4">
              To prevent return shipping charges and reschedule delivery, verify your address:
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Verify Shipping Address
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Shipping Scam",
        telltales: [
          "Unofficial Amazon domain",
          "Creates urgency about package",
          "Threatens charges",
          "Generic order number",
          "External verification link"
        ],
        behavioralTrigger: "Exploits anxiety about lost packages and financial loss"
      },
      {
        sender: "security@microsft-help.net",
        subject: "⚠️ Unusual Activity Detected in OneDrive",
        content: (
          <div className="email-content">
            <div className="alert bg-red-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-red-800">Security Alert</div>
              <div className="mt-2">
                Multiple file deletions detected in your OneDrive
                <br />
                Time: Last 24 hours
                <br />
                Files Affected: Documents, Photos
              </div>
            </div>
            <div className="mb-4">
              Review and restore affected files immediately:
            </div>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded">
              Review File Activity
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Cloud Storage Scam",
        telltales: [
          "Misspelled Microsoft domain",
          "Creates panic about data loss",
          "Urgent action required",
          "Vague threat details",
          "External review link"
        ],
        behavioralTrigger: "Exploits fear of losing important files"
      },
      {
        sender: "support@netf1ix-account.com",
        subject: "🔔 Netflix Payment Declined",
        content: (
          <div className="email-content">
            <div className="bg-red-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-red-800">Account Suspension Warning</div>
              <div className="mt-2">Your account will be suspended in 24 hours.</div>
            </div>
            <div className="mb-4">
              To continue watching:
              <ul className="list-disc ml-5 mt-2">
                <li>Update payment method</li>
                <li>Verify billing information</li>
              </ul>
            </div>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded">
              Update Payment
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Entertainment Service Scam",
        telltales: [
          "Misspelled Netflix (1 instead of i)",
          "Threatens service loss",
          "Urgent timeframe",
          "No account specifics",
          "External payment link"
        ],
        behavioralTrigger: "Exploits fear of losing entertainment access"
      },
      {
        sender: "support@apple-device-alert.net",
        subject: "🔐 Sign-in from New iPhone in China",
        content: (
          <div className="email-content">
            <div className="device-alert bg-gray-100 p-4 rounded mb-4">
              <div className="text-lg font-bold">New Sign-in Alert</div>
              <div className="mt-2">
                Device: Unknown iPhone
                <br />
                Location: Beijing, China
                <br />
                Time: 3:47 AM
              </div>
            </div>
            <div className="mb-4">
              If this wasn't you, secure your account now:
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Secure Account
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Account Security Scam",
        telltales: [
          "Unofficial Apple domain",
          "Foreign location to create panic",
          "Odd timing",
          "Vague device details",
          "External security link"
        ],
        behavioralTrigger: "Exploits fear of account compromise"
      },
      {
        sender: "customerservice@paypa1-secure.net",
        subject: "🚨 PayPal: Unauthorized Transaction",
        content: (
          <div className="email-content">
            <div className="transaction-alert bg-red-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-red-800">Unauthorized Payment</div>
              <div className="mt-2">
                Amount: $499.99
                <br />
                To: Unknown Merchant
                <br />
                Status: Processing
              </div>
            </div>
            <div className="mb-4">
              Cancel this transaction immediately:
            </div>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded">
              Cancel Transaction
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Payment Service Scam",
        telltales: [
          "Misspelled PayPal domain (1 instead of l)",
          "Creates financial panic",
          "Vague merchant details",
          "Urgent action needed",
          "External cancellation link"
        ],
        behavioralTrigger: "Exploits fear of financial loss"
      },
      {
        sender: "survey@giftcard-reward.net",
        subject: "🎁 $100 Gift Card - 2-Minute Survey",
        content: (
          <div className="email-content">
            <div className="reward-box bg-green-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-green-800">Exclusive Offer</div>
              <div className="mt-2">
                Complete our quick survey and receive:
                <div className="text-2xl font-bold mt-2">$100 Gift Card</div>
              </div>
            </div>
            <div className="mb-4">
              Only 3 gift cards remaining!
            </div>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded">
              Take Survey
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Survey Scam",
        telltales: [
          "Too good to be true reward",
          "Artificial scarcity",
          "Quick reward promise",
          "Generic domain",
          "External survey link"
        ],
        behavioralTrigger: "Exploits desire for easy rewards"
      }
    ],


    intermediate: [
      {
        sender: "hr.policies@company-updates.net",
        subject: "Urgent: Updated HR Policy Acknowledgment Required",
        content: (
          <div className="email-content">
            <div className="policy-alert bg-blue-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-blue-800">Policy Update Notice</div>
              <div className="mt-2">
                <span className="text-red-600">Deadline: End of Day</span>
                <br />
                Multiple employees have reported non-compliance.
              </div>
            </div>
            <div className="document-preview bg-gray-100 p-3 rounded mb-4">
              <div className="flex items-center">
                <img src="/api/placeholder/24/24" alt="PDF" className="mr-2" />
                <span>Updated_Policies_2024.pdf</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Review and Acknowledge
            </button>
          </div>
        ),
        isPhishing: true,
        type: "HR Policy Scam",
        telltales: [
          "Unofficial company domain",
          "Creates peer pressure",
          "Urgent deadline",
          "External document link",
          "Threatens non-compliance"
        ],
        behavioralTrigger: "Exploits fear of workplace non-compliance and authority"
      },
      {
        sender: "talent@linkedln-careers.net",
        subject: "🌟 Confidential: Senior Position Match",
        content: (
          <div className="email-content">
            <div className="job-alert bg-blue-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-blue-800">Career Opportunity</div>
              <div className="mt-2">
                A Fortune 500 company is interested in your profile.
                <br />
                Position: Senior Role
                <br />
                Salary Range: $150K - $200K
              </div>
            </div>
            <div className="mb-4">
              Due to confidentiality, review details here:
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              View Position Details
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Career Opportunity Scam",
        telltales: [
          "Misspelled LinkedIn domain",
          "Vague company details",
          "Too good to be true salary",
          "Confidentiality emphasis",
          "External job link"
        ],
        behavioralTrigger: "Exploits career ambitions and curiosity"
      },
      {
        sender: "meetings@webex-recording.net",
        subject: "Missing Important Team Meeting Recording",
        content: (
          <div className="email-content">
            <div className="meeting-alert bg-gray-100 p-4 rounded mb-4">
              <div className="text-lg font-bold">Missed Meeting Notice</div>
              <div className="mt-2">
                Meeting: Team Strategy Discussion
                <br />
                Duration: 45 minutes
                <br />
                Participants: 8 team members
              </div>
            </div>
            <div className="mb-4">
              Your manager requested you review this recording ASAP.
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Watch Recording
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Meeting Recording Scam",
        telltales: [
          "Unofficial WebEx domain",
          "Vague meeting details",
          "Management pressure",
          "External recording link",
          "Creates urgency"
        ],
        behavioralTrigger: "Exploits fear of missing important meetings"
      },
      {
        sender: "help@sharepoint-documents.net",
        subject: "Shared Document: Q4 Performance Review",
        content: (
          <div className="email-content">
            <div className="document-alert bg-blue-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-blue-800">Shared Document</div>
              <div className="mt-2">
                From: Your Supervisor
                <br />
                Document: Q4_Performance_Review.xlsx
                <br />
                Status: Pending Review
              </div>
            </div>
            <div className="mb-4">
              Review before your upcoming evaluation meeting.
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Open Document
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Document Sharing Scam",
        telltales: [
          "Unofficial SharePoint domain",
          "Vague supervisor reference",
          "Performance review bait",
          "External document link",
          "Creates anxiety"
        ],
        behavioralTrigger: "Exploits anxiety about performance reviews"
      },
      {
        sender: "it.support@system-updates.net",
        subject: "⚠️ Critical System Update Required",
        content: (
          <div className="email-content">
            <div className="update-alert bg-yellow-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-yellow-800">System Update Notice</div>
              <div className="mt-2">
                Update Type: Security Patch
                <br />
                Deadline: 2 hours
                <br />
                Status: Required
              </div>
            </div>
            <div className="mb-4">
              Install update to maintain system access:
            </div>
            <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded">
              Install Update Now
            </button>
          </div>
        ),
        isPhishing: true,
        type: "IT Update Scam",
        telltales: [
          "Unofficial IT domain",
          "Short deadline",
          "Threatens access loss",
          "External update link",
          "Unusual update process"
        ],
        behavioralTrigger: "Exploits fear of system access loss"
      },
      {
        sender: "security@password-reset.net",
        subject: "🔐 Multiple Failed Login Attempts",
        content: (
          <div className="email-content">
            <div className="security-alert bg-red-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-red-800">Security Alert</div>
              <div className="mt-2">
                Failed Attempts: 5
                <br />
                Location: Unknown IP
                <br />
                Status: Account Lock Pending
              </div>
            </div>
            <div className="mb-4">
              Reset your password immediately:
            </div>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded">
              Reset Password
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Password Reset Scam",
        telltales: [
          "Generic security domain",
          "Creates urgency",
          "Vague location details",
          "External reset link",
          "Account lock threat"
        ],
        behavioralTrigger: "Exploits fear of account compromise"
      },
      {
        sender: "notification@teams-chat.net",
        subject: "💬 New Teams Message from CEO",
        content: (
          <div className="email-content">
            <div className="message-alert bg-blue-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-blue-800">New Message</div>
              <div className="mt-2">
                From: Company CEO
                <br />
                Priority: High
                <br />
                Status: Awaiting Response
              </div>
            </div>
            <div className="mb-4">
              View and respond to this message:
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Open Message
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Executive Message Scam",
        telltales: [
          "Unofficial Teams domain",
          "CEO authority bait",
          "Creates urgency",
          "External message link",
          "Vague message content"
        ],
        behavioralTrigger: "Exploits respect for authority and fear of ignoring executives"
      }
    ],


    expert: [
      {
        sender: "m.davis@client-projects-review.com",
        subject: "Re: Updated Project Deliverables Review",
        content: (
          <div className="email-content">
            <div className="mb-4">
              Hi there,
              <br /><br />
              Following up on our discussion in yesterday's meeting regarding the Q1 deliverables. I've updated the project timeline document with the new requirements from the stakeholders.
            </div>
            <div className="document-preview bg-gray-100 p-3 rounded mb-4">
              <div className="flex items-center">
                <img src="/api/placeholder/24/24" alt="DOC" className="mr-2" />
                <div>
                  <div className="font-medium">Q1_Project_Timeline_V2.docx</div>
                  <div className="text-sm text-gray-500">Modified: Today 10:23 AM</div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              Please review and sign off before EOD as discussed. The client is waiting for our update.
            </div>
            <a href="#" className="text-blue-600">https://docs-share.net/projects/timeline</a>
          </div>
        ),
        isPhishing: true,
        type: "Sophisticated Business Context",
        telltales: [
          "Creates fake meeting context",
          "Uses business pressure",
          "Unauthorized document sharing",
          "EOD urgency",
          "Vague client reference"
        ],
        behavioralTrigger: "Exploits business responsibilities and time pressure"
      },
      {
        sender: "jack.williams@vendor-invoicing.net",
        subject: "RE: Pending Invoice Payment Status",
        content: (
          <div className="email-content">
            <div className="invoice-box bg-gray-50 p-4 rounded mb-4">
              <div className="text-lg font-bold">Invoice Reminder</div>
              <div className="mt-2">
                Invoice #: INV-2024-156
                <br />
                Amount: $24,850.00
                <br />
                Status: Payment Overdue
              </div>
            </div>
            <div className="mb-4">
              As per our call this morning, I've updated the invoice with the discussed changes. Please process payment ASAP to avoid service interruption.
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Review and Pay Invoice
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Vendor Payment Scam",
        telltales: [
          "References fake call",
          "Large specific amount",
          "Service interruption threat",
          "Unofficial payment portal",
          "Creates urgency"
        ],
        behavioralTrigger: "Exploits vendor relationship and payment responsibilities"
      },
      {
        sender: "calendar@teams-meetings.net",
        subject: "Missed Call + Voicemail from CEO",
        content: (
          <div className="email-content">
            <div className="missed-call-box bg-red-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-red-800">Missed Call Alert</div>
              <div className="mt-2">
                From: Company CEO
                <br />
                Duration: 2:15
                <br />
                Status: Urgent Voicemail
              </div>
            </div>
            <div className="voicemail-preview bg-gray-100 p-3 rounded mb-4">
              Message Preview: "Important discussion needed about..."
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Listen to Voicemail
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Executive Impersonation",
        telltales: [
          "Unofficial Teams domain",
          "CEO authority bait",
          "Urgent voicemail tactic",
          "Vague message preview",
          "External player link"
        ],
        behavioralTrigger: "Exploits executive authority and curiosity"
      },
      {
        sender: "security@authentication-verify.net",
        subject: "Multi-Factor Authentication Update Required",
        content: (
          <div className="email-content">
            <div className="security-box bg-yellow-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-yellow-800">Security Update Required</div>
              <div className="mt-2">
                Your account security requires immediate attention due to new compliance requirements.
              </div>
            </div>
            <div className="steps-list mb-4">
              <div className="font-medium mb-2">Required Actions:</div>
              <ol className="list-decimal ml-5">
                <li>Verify current authentication</li>
                <li>Update security preferences</li>
                <li>Confirm new MFA settings</li>
              </ol>
            </div>
            <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded">
              Start Security Update
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Security Protocol Scam",
        telltales: [
          "Generic security domain",
          "Compliance pressure",
          "Complex process",
          "External verification",
          "Technical intimidation"
        ],
        behavioralTrigger: "Exploits security compliance fears and technical complexity"
      },
      {
        sender: "support@docusign-contracts.net",
        subject: "Contract Requires Immediate Attention",
        content: (
          <div className="email-content">
            <div className="contract-box bg-blue-50 p-4 rounded mb-4">
              <div className="text-lg font-bold text-blue-800">Document Signing Request</div>
              <div className="mt-2">
                Document: Employment_Agreement_2024.pdf
                <br />
                Status: Pending Signature
                <br />
                Deadline: Today 5 PM EST
              </div>
            </div>
            <div className="mb-4">
              Other parties have completed signing. Your signature is the final requirement.
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Review and Sign
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Document Signing Scam",
        telltales: [
          "Unofficial DocuSign domain",
          "Peer pressure tactic",
          "Urgent deadline",
          "External signing link",
          "Employment document bait"
        ],
        behavioralTrigger: "Exploits document signing routine and deadline pressure"
      },
      {
        sender: "alex.thompson@financial-reports.net",
        subject: "Confidential: Q4 Financial Review",
        content: (
          <div className="email-content">
            <div className="confidential-box bg-gray-100 p-4 rounded mb-4">
              <div className="text-lg font-bold">Confidential Document</div>
              <div className="mt-2">
                <span className="text-red-600">Restricted Access Document</span>
                <br />
                Type: Financial Report
                <br />
                Clearance: Level 2 Required
              </div>
            </div>
            <div className="mb-4">
              Verify your security clearance to access this confidential financial report.
            </div>
            <button className="w-full bg-gray-800 text-white py-2 px-4 rounded">
              Verify Clearance
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Confidential Document Scam",
        telltales: [
          "Unofficial financial domain",
          "Confidentiality bait",
          "Security clearance trick",
          "External verification",
          "Financial curiosity trigger"
        ],
        behavioralTrigger: "Exploits confidentiality intrigue and financial information access"
      },
      {
        sender: "notification@zoom-recordings.net",
        subject: "Executive Board Meeting Recording",
        content: (
          <div className="email-content">
            <div className="meeting-box bg-gray-50 p-4 rounded mb-4">
              <div className="text-lg font-bold">Recorded Meeting Access</div>
              <div className="mt-2">
                Meeting: Board Strategy Review
                <br />
                Duration: 1:45:30
                <br />
                Access Level: Executive
              </div>
            </div>
            <div className="mb-4">
              You've been granted temporary access to this executive meeting recording.
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
              Access Recording
            </button>
          </div>
        ),
        isPhishing: true,
        type: "Executive Meeting Scam",
        telltales: [
          "Unofficial Zoom domain",
          "Executive level bait",
          "Temporary access pressure",
          "External recording link",
          "Unauthorized access suggestion"
        ],
        behavioralTrigger: "Exploits curiosity about executive-level information"
      }
    ]
};


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [difficulty, setDifficulty] = useState('beginner');
  const [gameStarted, setGameStarted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleDifficultySelect = (level) => {
    setDifficulty(level);
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setShowFeedback(false);
    setShowSummary(false);
  };

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

  const nextQuestion = () => {
    if (currentQuestion < examples[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    } else {
      setShowSummary(true);
    }
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Phishing Email Training</h1>
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
                <div className="font-bold">
                  This is {example.isPhishing ? 'a phishing email' : 'a legitimate email'}
                </div>
                <div className="mt-2 text-sm">Type: {example.type}</div>
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
                Next Example →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};                              // Close App component

export default App;             // Export statement at very end

