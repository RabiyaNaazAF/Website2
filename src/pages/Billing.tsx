import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Printer, FileText, Mail, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";

const Billing = () => {
  const [billData, setBillData] = useState({
    customerName: "",
    space: "",
    date: new Date().toISOString().split('T')[0],
    qualityType: "",
    advance: "",
    midPayment: "",
    remainingPayment: "",
    totalPaid: "",
  });

  const companyName = "AJ Groups";
  const ceoName = "Mohammed Afeef Hussain";
  const logoUrl = "/logo3.png";

  const handleInputChange = (field: string, value: string) => {
    setBillData(prev => ({ ...prev, [field]: value }));
  };

  const calculateTotal = () => {
    const advance = parseFloat(billData.advance) || 0;
    const mid = parseFloat(billData.midPayment) || 0;
    const remaining = parseFloat(billData.remainingPayment) || 0;
    return advance + mid + remaining;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    // Basic validation
    if (!billData.customerName || !billData.space || !billData.qualityType) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Bill saved successfully!");
    // Here you would typically save to database
  };

  const generateBillText = () => {
    const total = calculateTotal();
    return `Invoice from ${companyName}\n\nCustomer: ${billData.customerName}\nProject: ${billData.space}\nQuality: ${billData.qualityType}\nDate: ${new Date(billData.date).toLocaleDateString()}\n\nPayment Details:\nAdvance: ₹${parseFloat(billData.advance || "0").toLocaleString()}\nMid Payment: ₹${parseFloat(billData.midPayment || "0").toLocaleString()}\nRemaining: ₹${parseFloat(billData.remainingPayment || "0").toLocaleString()}\nTotal Amount: ₹${total.toLocaleString()}\nTotal Paid: ₹${parseFloat(billData.totalPaid || "0").toLocaleString()}\n\nThank you for choosing ${companyName}`;
  };

  const handleShareEmail = () => {
    const subject = `Invoice from ${companyName} - ${billData.customerName}`;
    const body = generateBillText();
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const handleShareWhatsApp = () => {
    const text = generateBillText();
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink);
  };

  const handleSharePhone = () => {
    const text = generateBillText();
    const smsLink = `sms:?body=${encodeURIComponent(text)}`;
    window.open(smsLink);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Create Bill</h1>
              <div className="flex gap-4 flex-wrap">
                <Button onClick={handleSave} variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Save Bill
                </Button>
                <Button onClick={handlePrint}>
                  <Printer className="h-4 w-4 mr-2" />
                  Print Bill
                </Button>
                <Button onClick={handleShareEmail} variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Share via Email
                </Button>
                <Button onClick={handleShareWhatsApp} variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Share via WhatsApp
                </Button>
                <Button onClick={handleSharePhone} variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Share via SMS
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bill Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Bill Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="customerName">Customer Name *</Label>
                    <Input
                      id="customerName"
                      value={billData.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      placeholder="Enter customer name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="space">Project *</Label>
                    <Select
                    id="space"
                      value={billData.space}
                      onValueChange={(value) => handleInputChange("space", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Construction">Construction</SelectItem>
                        <SelectItem value=" Real_Estate">Real Estate</SelectItem>
                        <SelectItem value="Land_Development">Land Development</SelectItem>
                        <SelectItem value="Architecture">Architecture</SelectItem>
                      </SelectContent>
                    </Select>
                   
                  </div>

                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={billData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="qualityType">Quality Type *</Label>
                    <Select
                      value={billData.qualityType}
                      onValueChange={(value) => handleInputChange("qualityType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality type" />
                      </SelectTrigger>
                      <SelectContent>
                        
                        <SelectItem value="Silver">Silver</SelectItem>
                        <SelectItem value="Gold">Gold</SelectItem>
                        <SelectItem value="Diamond">Diamond</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="advance">Advance Payment (₹)</Label>
                    <Input
                      id="advance"
                      type="number"
                      value={billData.advance}
                      onChange={(e) => handleInputChange("advance", e.target.value)}
                      placeholder="0.00"
                    />
                  </div>

                  <div>
                    <Label htmlFor="midPayment">Mid Payment (₹)</Label>
                    <Input
                      id="midPayment"
                      type="number"
                      value={billData.midPayment}
                      onChange={(e) => handleInputChange("midPayment", e.target.value)}
                      placeholder="0.00"
                    />
                  </div>

                  <div>
                    <Label htmlFor="remainingPayment">Remaining Payment (₹)</Label>
                    <Input
                      id="remainingPayment"
                      type="number"
                      value={billData.remainingPayment}
                      onChange={(e) => handleInputChange("remainingPayment", e.target.value)}
                      placeholder="0.00"
                    />
                  </div>

                  <div>
                    <Label htmlFor="totalPaid">Total Paid (₹)</Label>
                    <Input
                      id="totalPaid"
                      type="number"
                      value={billData.totalPaid}
                      onChange={(e) => handleInputChange("totalPaid", e.target.value)}
                      placeholder="0.00"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Bill Preview */}
              <Card className="print:shadow-none print:border-none">
                <CardHeader className="print:hidden">
                  <CardTitle>Bill Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div id="bill-preview" className="bg-white p-8 rounded-lg shadow-sm border print:shadow-none print:border-none print:p-0">
                    {/* Company Header */}
                    <div className="text-center mb-8">
                      <img src={logoUrl} alt="Company Logo" className="h-16 mx-auto mb-4" />
                      <h2 className="text-2xl font-bold text-gray-800">{companyName}</h2>
                      <p className="text-gray-600">Construction & Real Estate</p>
                      <p className="text-sm text-gray-500 mt-2">CEO: {ceoName}</p>
                    </div>

                    {/* Bill Title */}
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-semibold text-gray-800">INVOICE</h3>
                      <p className="text-sm text-gray-600">Bill Date: {new Date(billData.date).toLocaleDateString()}</p>
                    </div>

                    {/* Customer Details */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-4">Bill To:</h4>
                      <div className="bg-gray-50 p-4 rounded">
                        <p className="font-medium">{billData.customerName || "Customer Name"}</p>
                        <p className="text-sm text-gray-600">Project: {billData.space || "Project/Space Details"}</p>
                        <p className="text-sm text-gray-600">Quality: {billData.qualityType || "Quality Type"}</p>
                      </div>
                    </div>

                    {/* Payment Details */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-4">Payment Details:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Advance Payment:</span>
                          <span>₹{parseFloat(billData.advance || "0").toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between">
                          <span>Mid Payment:</span>
                          <span>₹{parseFloat(billData.midPayment || "0").toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between">
                          <span>Remaining Payment:</span>
                          <span>₹{parseFloat(billData.remainingPayment || "0").toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-semibold border-t pt-2">
                          <span>Total Amount:</span>
                          <span>₹{calculateTotal().toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                          <span>Total Paid:</span>
                          <span>₹{parseFloat(billData.totalPaid || "0").toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center text-sm text-gray-600 mt-12">
                      <p>Thank you for choosing {companyName}</p>
                      <p className="mt-2">For any queries, contact us at ajgroupsconstruction@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:border-none {
            border: none !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
          body {
            background: white !important;
          }
          #bill-preview {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Billing;
