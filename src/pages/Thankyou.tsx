
const Thankyou = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4">
      <div className="max-w-md w-full text-center h-fit mt-[10%]">
        {/* Illustration */}
        <div className="mb-8">
          <img
            src="/images/thankyou.png"
            alt="Thank you illustration"
            className="w-full h-auto max-w-sm mx-auto"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>

          <div className="space-y-2">
            <p className="text-gray-600">
              Thank you for your loan application.
            </p>
            <p className="text-gray-600">
              Our team will review your details and will contact you soon.
            </p>
          </div>

          <div className="pt-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Check your active loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
