import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Target, TrendingUp, CheckCircle2, Star, Briefcase, FileText, MessageSquare, BarChart3, Calendar, Users2 } from 'lucide-react';
type CareerLandingProps = Record<string, never>;
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const features = [{
  icon: Target,
  title: 'Ikigai Assessment',
  free: 'Basic 10 questions',
  premium: 'Full 50 questions + detailed report',
  mpid: "e8b5d25c-4817-4f6e-a911-42d247dd7aac"
}, {
  icon: FileText,
  title: 'CV Builder',
  free: '2 basic templates',
  premium: '15+ ATS-optimized templates',
  mpid: "7ff21737-39cb-4130-9170-ac435f415f96"
}, {
  icon: Sparkles,
  title: 'LinkedIn Audit',
  free: 'None',
  premium: 'AI-powered monthly audit',
  mpid: "3c47097f-902a-49da-bec0-3e4a5745b661"
}, {
  icon: Briefcase,
  title: 'Job Matches',
  free: '5 matches/month',
  premium: 'Unlimited with fit scores',
  mpid: "2fe79445-0eea-48d4-a9fd-c0aa2e18b77c"
}, {
  icon: MessageSquare,
  title: 'Expert Q&A',
  free: 'None',
  premium: '1 question/month (48hr response)',
  mpid: "66ad901d-4ecf-4846-830a-cbb996d0712e"
}, {
  icon: BarChart3,
  title: 'Application Tracker',
  free: 'Track up to 10',
  premium: 'Unlimited + analytics',
  mpid: "df38f78a-a256-493c-abb7-53950ced078e"
}, {
  icon: Users2,
  title: 'Community',
  free: 'View-only',
  premium: 'Full access + group coaching',
  mpid: "f5cdda58-9fe7-4ca8-b3d3-8d7ffe938d63"
}, {
  icon: Calendar,
  title: 'Support',
  free: 'Email (72hr)',
  premium: 'Priority + live chat (24hr)',
  mpid: "daf0a150-f6b0-435c-99b5-53fe2e1bf6ae"
}] as any[];
const testimonials = [{
  name: 'Sarah Chen',
  role: 'Career Changer',
  image: '👩‍💼',
  quote: 'The Ikigai assessment helped me discover roles I never considered. I landed my dream job in tech within 3 months!',
  mpid: "2f58641e-9fbb-4b6a-b5ef-09c7f84cd064"
}, {
  name: 'James Wilson',
  role: 'Returning Professional',
  image: '👨‍💻',
  quote: 'After a 5-year career break, the CV builder and expert guidance gave me confidence. Now I\'m back stronger than ever.',
  mpid: "6600e667-9741-439c-bd9b-01e2a68c4c3e"
}, {
  name: 'Priya Patel',
  role: 'Recent Graduate',
  image: '👩‍🎓',
  quote: 'The job matches were spot-on and the community support was invaluable during my search. Worth every penny!',
  mpid: "770776c1-9b0a-4a7e-91a0-98a17f709971"
}] as any[];
const stats = [{
  value: '10K+',
  label: 'Active Users',
  mpid: "2667209f-e5b5-4fcf-b5d6-35fe0fc542c3"
}, {
  value: '85%',
  label: 'Success Rate',
  mpid: "ac2339c6-845f-4a05-8d61-bfd11027c9a6"
}, {
  value: '2.3x',
  label: 'Faster Job Placement',
  mpid: "db276786-08d1-4502-ad2e-73bed2d0c4f0"
}, {
  value: '4.8/5',
  label: 'User Rating',
  mpid: "98288046-f29f-4322-a23a-c3599f49c166"
}] as any[];

// @component: CareerLanding
export const CareerLanding = (props: CareerLandingProps) => {
  const [activeTab, setActiveTab] = React.useState<'free' | 'premium'>('premium');

  // @return
  return <SortableContainer dndKitId="7be59b46-0705-4ebf-a049-5f34d5c44773" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50" data-magicpath-id="0" data-magicpath-path="CareerLanding.tsx">
      {/* Navigation */}
      <SortableContainer dndKitId="e81b3db9-abe9-4d36-8c51-ffac154f901a" containerType="regular" prevTag="nav" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200" data-magicpath-id="1" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="1106f03e-8134-4b8f-93c3-23056bf71325" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="b2782eb9-c170-468f-90a3-4a8e62d06141" containerType="regular" prevTag="div" className="flex justify-between items-center h-16" data-magicpath-id="3" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="26c5b064-433e-4b3a-aaaf-e4ffed79c138" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="4" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="eb087ebd-53a3-4288-84fc-350a080d668b" containerType="regular" prevTag="div" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="5" data-magicpath-path="CareerLanding.tsx">
                <Sparkles className="w-6 h-6 text-white" />
              </SortableContainer>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="6" data-magicpath-path="CareerLanding.tsx">
                CareerTransform
              </span>
            </SortableContainer>
            <SortableContainer dndKitId="e11dbbba-68d8-4ca5-94d7-f4e9d2774782" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="7" data-magicpath-path="CareerLanding.tsx">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors" data-magicpath-id="8" data-magicpath-path="CareerLanding.tsx">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors" data-magicpath-id="9" data-magicpath-path="CareerLanding.tsx">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors" data-magicpath-id="10" data-magicpath-path="CareerLanding.tsx">Testimonials</a>
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors" data-magicpath-id="11" data-magicpath-path="CareerLanding.tsx">
                Sign In
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all" data-magicpath-id="12" data-magicpath-path="CareerLanding.tsx">
                Start Free
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="41c9dd89-467a-4787-bbdd-d5272ab72fab" containerType="regular" prevTag="section" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="13" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="e4abbe13-d5b4-45ac-834c-bdf71a5a6c5b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="14" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="2e811b62-cb9f-49a3-9081-b0c6e958244f" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={stagger} className="text-center" data-magicpath-id="15" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="03be5fec-99ea-4215-8083-9c0ead541798" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6" data-magicpath-id="16" data-magicpath-path="CareerLanding.tsx">
              <Sparkles className="w-4 h-4" />
              <span data-magicpath-id="17" data-magicpath-path="CareerLanding.tsx">Transform Your Career Journey</span>
            </SortableContainer>
            
            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight" data-magicpath-id="18" data-magicpath-path="CareerLanding.tsx">
              Find Your Perfect Career Path
              <br data-magicpath-id="19" data-magicpath-path="CareerLanding.tsx" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="20" data-magicpath-path="CareerLanding.tsx">
                For Just £9/month
              </span>
            </motion.h1>
            
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" data-magicpath-id="21" data-magicpath-path="CareerLanding.tsx">
              AI-powered tools, personality profiling, and expert guidance to help you land your dream job. 
              Join thousands who've transformed their careers.
            </motion.p>
            
            <SortableContainer dndKitId="89488820-0b52-444e-b219-4893c9b15cc3" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="22" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="c52c6772-326c-4fa6-a4d9-9aaae9379df2" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="23" data-magicpath-path="CareerLanding.tsx">
                <span data-magicpath-id="24" data-magicpath-path="CareerLanding.tsx">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="25" data-magicpath-path="CareerLanding.tsx" />
              </SortableContainer>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-all" data-magicpath-id="26" data-magicpath-path="CareerLanding.tsx">
                Take Free Assessment
              </button>
            </SortableContainer>

            <SortableContainer dndKitId="122d6daa-eae2-400f-849f-c266c57e354a" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="mt-12 flex items-center justify-center space-x-6 text-sm text-gray-600" data-magicpath-id="27" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="cb5a4ce6-4faf-4ea6-9767-2601faa70ede" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="28" data-magicpath-path="CareerLanding.tsx">
                <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="29" data-magicpath-path="CareerLanding.tsx" />
                <span data-magicpath-id="30" data-magicpath-path="CareerLanding.tsx">No credit card required</span>
              </SortableContainer>
              <SortableContainer dndKitId="3feaac28-3472-4ee7-8424-3537b2f6d818" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="31" data-magicpath-path="CareerLanding.tsx">
                <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="32" data-magicpath-path="CareerLanding.tsx" />
                <span data-magicpath-id="33" data-magicpath-path="CareerLanding.tsx">Cancel anytime</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="082f74e0-5e6c-4efa-8d26-37d37781bcb3" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="34" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="86d14aad-1f1a-40ca-b524-ac22c8f781a6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="35" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="e8a677ab-e7c6-4978-9e86-6d1c12edd4dc" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-8" data-magicpath-id="36" data-magicpath-path="CareerLanding.tsx">
            {stats.map((stat, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="CareerLanding.tsx">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:string" data-magicpath-id="38" data-magicpath-path="CareerLanding.tsx">
                  {stat.value}
                </div>
                <div className="text-gray-600" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="39" data-magicpath-path="CareerLanding.tsx">{stat.label}</div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Features Section */}
      <SortableContainer dndKitId="13484893-3db2-42a5-80b8-6bd55e9f859f" containerType="regular" prevTag="section" id="features" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="40" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="bf88c156-85e5-4ab1-8cd4-2ddf778da435" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="d04e0e19-922b-433a-bf43-c48f8cbc8f7e" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="42" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="43" data-magicpath-path="CareerLanding.tsx">
              Everything You Need to Succeed
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto" data-magicpath-id="44" data-magicpath-path="CareerLanding.tsx">
              From self-discovery to job offers, we've got you covered at every step of your career journey.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="a60fd9c3-c65a-45d2-89e8-f3a95f279ff2" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="45" data-magicpath-path="CareerLanding.tsx">
            {features.map((feature, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.05
          }} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="CareerLanding.tsx">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="CareerLanding.tsx">
                  <feature.icon className="w-6 h-6 text-blue-600" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="CareerLanding.tsx" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="49" data-magicpath-path="CareerLanding.tsx">{feature.title}</h3>
                <div className="space-y-2 text-sm" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="CareerLanding.tsx">
                  <div className="flex items-start space-x-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="CareerLanding.tsx">
                    <span className="text-gray-500 mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="CareerLanding.tsx">Free:</span>
                    <span className="text-gray-600" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="free:string" data-magicpath-id="53" data-magicpath-path="CareerLanding.tsx">{feature.free}</span>
                  </div>
                  <div className="flex items-start space-x-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="CareerLanding.tsx">
                    <span className="text-blue-600 font-medium mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="CareerLanding.tsx">Premium:</span>
                    <span className="text-gray-900" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="premium:string" data-magicpath-id="56" data-magicpath-path="CareerLanding.tsx">{feature.premium}</span>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing Section */}
      <SortableContainer dndKitId="d26e2cf8-ae53-4876-a03b-7c67ecfd2657" containerType="regular" prevTag="section" id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50" data-magicpath-id="57" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="db09d02a-09d1-43ff-b981-fb9bb7bdc2df" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="58" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="60133977-ded0-4d26-874a-fce39aace559" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="59" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="60" data-magicpath-path="CareerLanding.tsx">
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="61" data-magicpath-path="CareerLanding.tsx">
              Start free, upgrade when you're ready. No hidden fees.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="d06f3ac9-d921-47e2-8d1b-dd740f9b16c5" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="62" data-magicpath-path="CareerLanding.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="d66a8275-a195-4f3b-834a-2229dd83fee6" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl p-8 border-2 border-gray-200" data-magicpath-id="63" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="eb09f13b-4f89-49e4-bc72-c9a1d73b6215" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="64" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" data-magicpath-id="65" data-magicpath-path="CareerLanding.tsx">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2" data-magicpath-id="66" data-magicpath-path="CareerLanding.tsx">£0</div>
                <p className="text-gray-600" data-magicpath-id="67" data-magicpath-path="CareerLanding.tsx">Perfect to get started</p>
              </SortableContainer>
              <SortableContainer dndKitId="81ef3cfe-283f-42d5-9201-f509575d103c" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="68" data-magicpath-path="CareerLanding.tsx">
                <li className="flex items-start space-x-3" data-magicpath-id="69" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="70" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="71" data-magicpath-path="CareerLanding.tsx">Basic Ikigai assessment</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="72" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="73" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="74" data-magicpath-path="CareerLanding.tsx">2 CV templates</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="75" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="76" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="77" data-magicpath-path="CareerLanding.tsx">5 job matches per month</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="78" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="79" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="80" data-magicpath-path="CareerLanding.tsx">Track up to 10 applications</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="81" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="82" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="83" data-magicpath-path="CareerLanding.tsx">View-only community access</span>
                </li>
              </SortableContainer>
              <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors" data-magicpath-id="84" data-magicpath-path="CareerLanding.tsx">
                Start Free
              </button>
            </SortableContainer>

            {/* Premium Plan */}
            <SortableContainer dndKitId="7422094d-5c29-4ac6-84e7-0cf06d707930" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden" data-magicpath-id="85" data-magicpath-path="CareerLanding.tsx">
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold" data-magicpath-id="86" data-magicpath-path="CareerLanding.tsx">
                Popular
              </div>
              <SortableContainer dndKitId="5ded7e24-c2db-4911-b5e8-4de0898ee154" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="87" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold mb-2" data-magicpath-id="88" data-magicpath-path="CareerLanding.tsx">Premium</h3>
                <div className="text-5xl font-bold mb-2" data-magicpath-id="89" data-magicpath-path="CareerLanding.tsx">£9</div>
                <p className="text-blue-100" data-magicpath-id="90" data-magicpath-path="CareerLanding.tsx">per month</p>
                <div className="mt-4 text-sm text-blue-100" data-magicpath-id="91" data-magicpath-path="CareerLanding.tsx">
                  Save £18 with annual plan (£90/year)
                </div>
              </SortableContainer>
              <SortableContainer dndKitId="f09c0e66-4c42-42db-b1f7-ecc8049ca8e6" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="92" data-magicpath-path="CareerLanding.tsx">
                <li className="flex items-start space-x-3" data-magicpath-id="93" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="94" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="95" data-magicpath-path="CareerLanding.tsx">Full 50-question Ikigai assessment</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="96" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="97" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="98" data-magicpath-path="CareerLanding.tsx">15+ ATS-optimized CV templates</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="99" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="100" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="101" data-magicpath-path="CareerLanding.tsx">AI-powered LinkedIn profile audit</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="102" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="103" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="104" data-magicpath-path="CareerLanding.tsx">Unlimited job matches with fit scores</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="105" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="106" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="107" data-magicpath-path="CareerLanding.tsx">1 expert Q&A per month</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="108" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="109" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="110" data-magicpath-path="CareerLanding.tsx">Unlimited application tracking + analytics</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="111" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="112" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="113" data-magicpath-path="CareerLanding.tsx">Full community + monthly group coaching</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="114" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="115" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="116" data-magicpath-path="CareerLanding.tsx">Priority support with 24hr response</span>
                </li>
              </SortableContainer>
              <button className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all" data-magicpath-id="117" data-magicpath-path="CareerLanding.tsx">
                Start Premium Trial
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Testimonials */}
      <SortableContainer dndKitId="69e3279b-9793-4f75-92b5-f27e24afd464" containerType="regular" prevTag="section" id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="118" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="97a839c1-a63a-4a82-9a25-eb39f5ba5ba0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="119" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="816c051b-dcc7-4e17-bc2c-09844137acf0" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="120" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="121" data-magicpath-path="CareerLanding.tsx">
              Loved by Career Changers
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="122" data-magicpath-path="CareerLanding.tsx">
              Real stories from people who transformed their careers
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="2844bf98-a132-4ab4-a396-7eb48ac9c014" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="123" data-magicpath-path="CareerLanding.tsx">
            {testimonials.map((testimonial, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="CareerLanding.tsx">
                <div className="flex items-center space-x-1 mb-4" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="CareerLanding.tsx">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="CareerLanding.tsx" />)}
                </div>
                <p className="text-gray-700 mb-6 italic" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="quote:string" data-magicpath-id="127" data-magicpath-path="CareerLanding.tsx">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="CareerLanding.tsx">
                  <div className="text-3xl" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="129" data-magicpath-path="CareerLanding.tsx">{testimonial.image}</div>
                  <div data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="130" data-magicpath-path="CareerLanding.tsx">
                    <div className="font-semibold text-gray-900" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="131" data-magicpath-path="CareerLanding.tsx">{testimonial.name}</div>
                    <div className="text-sm text-gray-600" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:string" data-magicpath-id="132" data-magicpath-path="CareerLanding.tsx">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* CTA Section */}
      <SortableContainer dndKitId="3e467f35-e10c-48aa-abbb-d0aeba5b8b59" containerType="regular" prevTag="section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600" data-magicpath-id="133" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="729e7e6b-a0a1-4213-a248-8583a569433b" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="134" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="b389d43d-cf7e-410f-bd20-1755affd7e5c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} data-magicpath-id="135" data-magicpath-path="CareerLanding.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-magicpath-id="136" data-magicpath-path="CareerLanding.tsx">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8" data-magicpath-id="137" data-magicpath-path="CareerLanding.tsx">
              Join 10,000+ professionals who've found their dream jobs. Start your journey today.
            </p>
            <SortableContainer dndKitId="268b417c-e1a1-41d0-b45c-7213b7c80ad2" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="138" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="39c523cb-1cfb-4237-a237-fe624bf1d167" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="139" data-magicpath-path="CareerLanding.tsx">
                <span data-magicpath-id="140" data-magicpath-path="CareerLanding.tsx">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="141" data-magicpath-path="CareerLanding.tsx" />
              </SortableContainer>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all" data-magicpath-id="142" data-magicpath-path="CareerLanding.tsx">
                View Demo
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="a1f05d3c-31fe-426d-aeab-ad392b50cb83" containerType="regular" prevTag="footer" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-300" data-magicpath-id="143" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="aadf9a08-b003-481f-9f86-73ee2a8818de" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="144" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="6480d071-147c-4ff8-bcba-4af36c924bed" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-8 mb-8" data-magicpath-id="145" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="ff8eecb7-56d0-4268-8e5f-de370203411a" containerType="regular" prevTag="div" data-magicpath-id="146" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="b1939ba1-3eb9-48af-87b9-a1955e2fd4e0" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4" data-magicpath-id="147" data-magicpath-path="CareerLanding.tsx">
                <SortableContainer dndKitId="da6b0f54-628d-40c1-95bb-bfed79779688" containerType="regular" prevTag="div" className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="148" data-magicpath-path="CareerLanding.tsx">
                  <Sparkles className="w-5 h-5 text-white" />
                </SortableContainer>
                <span className="text-lg font-bold text-white" data-magicpath-id="149" data-magicpath-path="CareerLanding.tsx">CareerTransform</span>
              </SortableContainer>
              <p className="text-sm text-gray-400" data-magicpath-id="150" data-magicpath-path="CareerLanding.tsx">
                Empowering careers through AI and human expertise.
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="d1f4af5b-4335-4b3b-92c3-bf1ec38f56a3" containerType="regular" prevTag="div" data-magicpath-id="151" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="152" data-magicpath-path="CareerLanding.tsx">Product</h4>
              <SortableContainer dndKitId="c4279ddf-4628-4d73-8f50-e778498c5276" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="153" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="154" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="155" data-magicpath-path="CareerLanding.tsx">Features</a></li>
                <li data-magicpath-id="156" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="157" data-magicpath-path="CareerLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="158" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="159" data-magicpath-path="CareerLanding.tsx">Testimonials</a></li>
                <li data-magicpath-id="160" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="161" data-magicpath-path="CareerLanding.tsx">FAQ</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="c26bd590-7386-4347-baf6-8366256138fc" containerType="regular" prevTag="div" data-magicpath-id="162" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="163" data-magicpath-path="CareerLanding.tsx">Company</h4>
              <SortableContainer dndKitId="c28982e5-bc87-4211-988e-928a85e5bec1" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="164" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="165" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="166" data-magicpath-path="CareerLanding.tsx">About</a></li>
                <li data-magicpath-id="167" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="168" data-magicpath-path="CareerLanding.tsx">Blog</a></li>
                <li data-magicpath-id="169" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="170" data-magicpath-path="CareerLanding.tsx">Careers</a></li>
                <li data-magicpath-id="171" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="172" data-magicpath-path="CareerLanding.tsx">Contact</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="d8525b2b-3538-4aa7-94a5-c8ff419d88cc" containerType="regular" prevTag="div" data-magicpath-id="173" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="174" data-magicpath-path="CareerLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="73c4a875-eac5-4cfc-9735-f73636027559" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="175" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="176" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="177" data-magicpath-path="CareerLanding.tsx">Privacy Policy</a></li>
                <li data-magicpath-id="178" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="179" data-magicpath-path="CareerLanding.tsx">Terms of Service</a></li>
                <li data-magicpath-id="180" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="181" data-magicpath-path="CareerLanding.tsx">Cookie Policy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="a76e72bd-aebe-48d2-bfe2-0e26cc9ac6a0" containerType="regular" prevTag="div" className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400" data-magicpath-id="182" data-magicpath-path="CareerLanding.tsx">
            <p data-magicpath-id="183" data-magicpath-path="CareerLanding.tsx">© 2024 CareerTransform. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};