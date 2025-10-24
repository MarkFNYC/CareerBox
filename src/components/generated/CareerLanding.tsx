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
  mpid: "0e928284-c9cc-49ad-806e-2d59874e979e"
}, {
  icon: FileText,
  title: 'CV Builder',
  free: '2 basic templates',
  premium: '15+ ATS-optimized templates',
  mpid: "c579494b-b360-414b-b26f-a3ac4ff377dd"
}, {
  icon: Sparkles,
  title: 'LinkedIn Audit',
  free: 'None',
  premium: 'AI-powered monthly audit',
  mpid: "5f409a29-ff14-4535-8804-36238e136f42"
}, {
  icon: Briefcase,
  title: 'Job Matches',
  free: '5 matches/month',
  premium: 'Unlimited with fit scores',
  mpid: "151158f0-cce1-4338-8f56-99d832859051"
}, {
  icon: MessageSquare,
  title: 'Expert Q&A',
  free: 'None',
  premium: '1 question/month (48hr response)',
  mpid: "32e07838-2e49-49d4-b356-1b081eacb365"
}, {
  icon: BarChart3,
  title: 'Application Tracker',
  free: 'Track up to 10',
  premium: 'Unlimited + analytics',
  mpid: "da8e19cb-6b58-42f8-a746-6e6608de6ca7"
}, {
  icon: Users2,
  title: 'Community',
  free: 'View-only',
  premium: 'Full access + group coaching',
  mpid: "52889414-ee40-4863-8b80-5ca547599640"
}, {
  icon: Calendar,
  title: 'Support',
  free: 'Email (72hr)',
  premium: 'Priority + live chat (24hr)',
  mpid: "b630e345-7adb-4ac2-aec5-f9ffea5990ca"
}] as any[];
const testimonials = [{
  name: 'Sarah Chen',
  role: 'Career Changer',
  image: '👩‍💼',
  quote: 'The Ikigai assessment helped me discover roles I never considered. I landed my dream job in tech within 3 months!',
  mpid: "e76154fc-a7c1-4994-9147-16e99fa5514a"
}, {
  name: 'James Wilson',
  role: 'Returning Professional',
  image: '👨‍💻',
  quote: 'After a 5-year career break, the CV builder and expert guidance gave me confidence. Now I\'m back stronger than ever.',
  mpid: "9387b5e7-bf32-4d51-ab46-968319ed2933"
}, {
  name: 'Priya Patel',
  role: 'Recent Graduate',
  image: '👩‍🎓',
  quote: 'The job matches were spot-on and the community support was invaluable during my search. Worth every penny!',
  mpid: "23400a46-38f3-44fa-81a3-3c04a7e4404e"
}] as any[];
const stats = [{
  value: '10K+',
  label: 'Active Users',
  mpid: "624d517a-f80e-41e4-9b1b-fa7ec1cc5e6a"
}, {
  value: '85%',
  label: 'Success Rate',
  mpid: "5bd64090-b703-4eea-9fd4-7e764218dcec"
}, {
  value: '2.3x',
  label: 'Faster Job Placement',
  mpid: "3656c9a2-687e-4ad7-9bfa-c4045ff39ea0"
}, {
  value: '4.8/5',
  label: 'User Rating',
  mpid: "17369109-5cf7-4f5d-ae7b-b619d55f25cb"
}] as any[];

// @component: CareerLanding
export const CareerLanding = (props: CareerLandingProps) => {
  const [activeTab, setActiveTab] = React.useState<'free' | 'premium'>('premium');

  // @return
  return <SortableContainer dndKitId="2598cd32-a7cd-474a-896a-bab4e0e2b006" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50" data-magicpath-id="0" data-magicpath-path="CareerLanding.tsx">
      {/* Navigation */}
      <SortableContainer dndKitId="f24bfa11-5afc-446b-ae33-08c14034a162" containerType="regular" prevTag="nav" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200" data-magicpath-id="1" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="1c1e721e-1a5f-4559-97a1-f4e2740e5926" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="1b640868-a68a-4134-b790-7504a0577151" containerType="regular" prevTag="div" className="flex justify-between items-center h-16" data-magicpath-id="3" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="861dfbef-c708-4825-a5f8-9a56e509c4b1" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="4" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="e5a3623e-7e49-4da4-b2c1-50cbf7709da3" containerType="regular" prevTag="div" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="5" data-magicpath-path="CareerLanding.tsx">
                <Sparkles className="w-6 h-6 text-white" />
              </SortableContainer>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="6" data-magicpath-path="CareerLanding.tsx">
                CareerBox
              </span>
            </SortableContainer>
            <SortableContainer dndKitId="20718ecd-7cb7-4a53-beee-49f47c287675" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="7" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="0c03eada-af39-44c8-bffc-6ddad1561c3e" containerType="regular" prevTag="section" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="13" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="53e9fc56-ea98-48fa-9da2-11fcec27b302" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="14" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="e5730b91-6ba8-452d-9cdd-b1b7de571449" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={stagger} className="text-center" data-magicpath-id="15" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="0f49e72e-ce10-42f8-a375-cf8c5930e4b6" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6" data-magicpath-id="16" data-magicpath-path="CareerLanding.tsx">
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
            
            <SortableContainer dndKitId="e9dbe74e-8889-44a8-a879-e959a42dc0f5" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="22" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="7427b696-881d-4742-bc65-d373a2232794" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="23" data-magicpath-path="CareerLanding.tsx">
                <span data-magicpath-id="24" data-magicpath-path="CareerLanding.tsx">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="25" data-magicpath-path="CareerLanding.tsx" />
              </SortableContainer>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-all" data-magicpath-id="26" data-magicpath-path="CareerLanding.tsx">
                Take Free Assessment
              </button>
            </SortableContainer>

            <SortableContainer dndKitId="27eeaf24-d6f1-4167-a7b8-938cdc627e3e" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="mt-12 flex items-center justify-center space-x-6 text-sm text-gray-600" data-magicpath-id="27" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="6e8d43f7-7b74-4daa-9bed-c8ba9c15c642" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="28" data-magicpath-path="CareerLanding.tsx">
                <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="29" data-magicpath-path="CareerLanding.tsx" />
                <span data-magicpath-id="30" data-magicpath-path="CareerLanding.tsx">No credit card required</span>
              </SortableContainer>
              <SortableContainer dndKitId="2f0dbd24-6e26-4fbc-a673-c78b414f9e99" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="31" data-magicpath-path="CareerLanding.tsx">
                <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="32" data-magicpath-path="CareerLanding.tsx" />
                <span data-magicpath-id="33" data-magicpath-path="CareerLanding.tsx">Cancel anytime</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="9eec65ad-564e-4a6d-a312-1ff118835dc9" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="34" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="acfbe0e5-5731-4532-9c0d-1db130912880" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="35" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="43511fc4-8e81-4a58-b3db-3854959ce8d6" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-8" data-magicpath-id="36" data-magicpath-path="CareerLanding.tsx">
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:unknown" data-magicpath-id="38" data-magicpath-path="CareerLanding.tsx">
                  {stat.value}
                </div>
                <div className="text-gray-600" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="39" data-magicpath-path="CareerLanding.tsx">{stat.label}</div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Features Section */}
      <SortableContainer dndKitId="3fcb3482-44a3-40dd-9d09-ec5102accd9d" containerType="regular" prevTag="section" id="features" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="40" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="755e1aaa-cc29-433a-88a0-1656d7b9e0ed" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="d3a4b1ad-7e90-4723-9d87-81c896c076e8" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="42" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="43" data-magicpath-path="CareerLanding.tsx">
              Everything You Need to Succeed
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto" data-magicpath-id="44" data-magicpath-path="CareerLanding.tsx">
              From self-discovery to job offers, we've got you covered at every step of your career journey.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="c68491d8-9999-44a6-862a-c78bbd4cd2ad" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="45" data-magicpath-path="CareerLanding.tsx">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="49" data-magicpath-path="CareerLanding.tsx">{feature.title}</h3>
                <div className="space-y-2 text-sm" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="CareerLanding.tsx">
                  <div className="flex items-start space-x-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="CareerLanding.tsx">
                    <span className="text-gray-500 mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="CareerLanding.tsx">Free:</span>
                    <span className="text-gray-600" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="free:unknown" data-magicpath-id="53" data-magicpath-path="CareerLanding.tsx">{feature.free}</span>
                  </div>
                  <div className="flex items-start space-x-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="CareerLanding.tsx">
                    <span className="text-blue-600 font-medium mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="CareerLanding.tsx">Premium:</span>
                    <span className="text-gray-900" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="premium:unknown" data-magicpath-id="56" data-magicpath-path="CareerLanding.tsx">{feature.premium}</span>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing Section */}
      <SortableContainer dndKitId="0abcce18-eea9-46ea-8449-3feadbc69ebb" containerType="regular" prevTag="section" id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50" data-magicpath-id="57" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="eee5af61-88ee-4884-a167-db61c03922ef" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="58" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="80599484-8d7b-421e-8a83-6b67a47b8027" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="59" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="60" data-magicpath-path="CareerLanding.tsx">
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="61" data-magicpath-path="CareerLanding.tsx">
              Start free, upgrade when you're ready. No hidden fees.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="f1e56520-3ef7-4d38-81ac-fcb878862e0e" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="62" data-magicpath-path="CareerLanding.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="fd5bae77-7522-4674-bcf9-5644b8478fe3" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl p-8 border-2 border-gray-200" data-magicpath-id="63" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="cac03023-2608-4c66-a802-9dbf8cb0598c" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="64" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" data-magicpath-id="65" data-magicpath-path="CareerLanding.tsx">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2" data-magicpath-id="66" data-magicpath-path="CareerLanding.tsx">£0</div>
                <p className="text-gray-600" data-magicpath-id="67" data-magicpath-path="CareerLanding.tsx">Perfect to get started</p>
              </SortableContainer>
              <SortableContainer dndKitId="74556e64-8332-4f37-9f53-e658d3002290" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="68" data-magicpath-path="CareerLanding.tsx">
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
            <SortableContainer dndKitId="f5dabc2b-e85c-4138-bf0a-34f056c04bd9" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="50c3ff81-a36b-4263-b852-5adff1ed956f" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="87" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold mb-2" data-magicpath-id="88" data-magicpath-path="CareerLanding.tsx">Premium</h3>
                <div className="text-5xl font-bold mb-2" data-magicpath-id="89" data-magicpath-path="CareerLanding.tsx">£9</div>
                <p className="text-blue-100" data-magicpath-id="90" data-magicpath-path="CareerLanding.tsx">per month</p>
                <div className="mt-4 text-sm text-blue-100" data-magicpath-id="91" data-magicpath-path="CareerLanding.tsx">
                  Save £18 with annual plan (£90/year)
                </div>
              </SortableContainer>
              <SortableContainer dndKitId="2f40cb3c-19d3-48e0-88a5-2c274bf680ec" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="92" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="7448ef73-b1ad-401f-9550-7251664c35f8" containerType="regular" prevTag="section" id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="118" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="e41ba3f7-17a9-4317-9fdd-004507eb214a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="119" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="bd02dfad-2e6e-4de3-a058-2c5cd6a3ad63" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="120" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="121" data-magicpath-path="CareerLanding.tsx">
              Loved by Career Changers
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="122" data-magicpath-path="CareerLanding.tsx">
              Real stories from people who transformed their careers
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="11c3de1e-0362-4ad3-b759-19a7e81a96bd" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="123" data-magicpath-path="CareerLanding.tsx">
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
                <p className="text-gray-700 mb-6 italic" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="quote:unknown" data-magicpath-id="127" data-magicpath-path="CareerLanding.tsx">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="CareerLanding.tsx">
                  <div className="text-3xl" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="129" data-magicpath-path="CareerLanding.tsx">{testimonial.image}</div>
                  <div data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="130" data-magicpath-path="CareerLanding.tsx">
                    <div className="font-semibold text-gray-900" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="131" data-magicpath-path="CareerLanding.tsx">{testimonial.name}</div>
                    <div className="text-sm text-gray-600" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="132" data-magicpath-path="CareerLanding.tsx">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* CTA Section */}
      <SortableContainer dndKitId="dba68425-0e9e-4dc1-84d9-e8a291a4e76a" containerType="regular" prevTag="section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600" data-magicpath-id="133" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="65ea1ac0-a3c1-4343-8ece-1ee62de08cb0" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="134" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="5178f52a-8faf-46b6-8762-e69dc01ec9b8" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="fd6370b0-0c81-4424-b690-a0985ee18564" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="138" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="fcf712cf-c36c-4dc4-903a-04e3b2d026b8" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="139" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="666d45e4-9881-4ff2-a52e-be03c8bc3d64" containerType="regular" prevTag="footer" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-300" data-magicpath-id="143" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="cccd2365-178e-4984-a63b-ecff8dd06789" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="144" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="e14ea1ed-a7da-4d5b-a248-bb1013145af5" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-8 mb-8" data-magicpath-id="145" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="8d8dec91-f7e0-487d-99ba-0bf4cfa8a587" containerType="regular" prevTag="div" data-magicpath-id="146" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="fc91ac66-94b7-4cf2-ae8a-1cadf9b221b7" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4" data-magicpath-id="147" data-magicpath-path="CareerLanding.tsx">
                <SortableContainer dndKitId="c1e2e54c-ad55-4802-b8ec-9206da6b209c" containerType="regular" prevTag="div" className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="148" data-magicpath-path="CareerLanding.tsx">
                  <Sparkles className="w-5 h-5 text-white" />
                </SortableContainer>
                <span className="text-lg font-bold text-white" data-magicpath-id="149" data-magicpath-path="CareerLanding.tsx">CareerBox</span>
              </SortableContainer>
              <p className="text-sm text-gray-400" data-magicpath-id="150" data-magicpath-path="CareerLanding.tsx">
                Empowering careers through AI and human expertise.
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="c1ca129e-0400-4f94-ac24-fadc0156378f" containerType="regular" prevTag="div" data-magicpath-id="151" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="152" data-magicpath-path="CareerLanding.tsx">Product</h4>
              <SortableContainer dndKitId="394de96b-8254-49e7-af42-0cffbaaf7e61" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="153" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="154" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="155" data-magicpath-path="CareerLanding.tsx">Features</a></li>
                <li data-magicpath-id="156" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="157" data-magicpath-path="CareerLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="158" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="159" data-magicpath-path="CareerLanding.tsx">Testimonials</a></li>
                <li data-magicpath-id="160" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="161" data-magicpath-path="CareerLanding.tsx">FAQ</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="3d95a816-0046-4113-b9c6-9fb4b5f9e669" containerType="regular" prevTag="div" data-magicpath-id="162" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="163" data-magicpath-path="CareerLanding.tsx">Company</h4>
              <SortableContainer dndKitId="820d28d2-243c-4fd0-a47f-ffd1dc5590c7" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="164" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="165" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="166" data-magicpath-path="CareerLanding.tsx">About</a></li>
                <li data-magicpath-id="167" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="168" data-magicpath-path="CareerLanding.tsx">Blog</a></li>
                <li data-magicpath-id="169" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="170" data-magicpath-path="CareerLanding.tsx">Careers</a></li>
                <li data-magicpath-id="171" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="172" data-magicpath-path="CareerLanding.tsx">Contact</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="01b93d14-65e0-490e-9bbc-c95fc2d9b25d" containerType="regular" prevTag="div" data-magicpath-id="173" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="174" data-magicpath-path="CareerLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="8341da24-4641-4ccb-a54e-da25969326d9" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="175" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="176" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="177" data-magicpath-path="CareerLanding.tsx">Privacy Policy</a></li>
                <li data-magicpath-id="178" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="179" data-magicpath-path="CareerLanding.tsx">Terms of Service</a></li>
                <li data-magicpath-id="180" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="181" data-magicpath-path="CareerLanding.tsx">Cookie Policy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="0f874c89-9b95-4041-a2d8-5ca91aa5b951" containerType="regular" prevTag="div" className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400" data-magicpath-id="182" data-magicpath-path="CareerLanding.tsx">
            <p data-magicpath-id="183" data-magicpath-path="CareerLanding.tsx">© 2024 CareerBox. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};