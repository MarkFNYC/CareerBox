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
  mpid: "1e824bed-6af1-4924-b2fb-9b36f6f81fd5"
}, {
  icon: FileText,
  title: 'CV Builder',
  free: '2 basic templates',
  premium: '15+ ATS-optimized templates',
  mpid: "283c5cb5-a9e3-438a-b933-af96bacef3ff"
}, {
  icon: Sparkles,
  title: 'LinkedIn Audit',
  free: 'None',
  premium: 'AI-powered monthly audit',
  mpid: "9802a1b1-21d7-4252-9026-c5b81c05cfec"
}, {
  icon: Briefcase,
  title: 'Job Matches',
  free: '5 matches/month',
  premium: 'Unlimited with fit scores',
  mpid: "8ac78dca-3177-4fa4-833a-c1460ccdd291"
}, {
  icon: MessageSquare,
  title: 'Expert Q&A',
  free: 'None',
  premium: '1 question/month (48hr response)',
  mpid: "0631b9c4-66c3-4748-974f-c7e561549074"
}, {
  icon: BarChart3,
  title: 'Application Tracker',
  free: 'Track up to 10',
  premium: 'Unlimited + analytics',
  mpid: "5d6e1379-aba1-45d0-920f-94233dc57d67"
}, {
  icon: Users2,
  title: 'Community',
  free: 'View-only',
  premium: 'Full access + group coaching',
  mpid: "17cb2354-bd72-4378-9e89-b86f37f2cb97"
}, {
  icon: Calendar,
  title: 'Support',
  free: 'Email (72hr)',
  premium: 'Priority + live chat (24hr)',
  mpid: "b654f891-124e-4430-8974-c45c1899af5d"
}] as any[];
const testimonials = [{
  name: 'Sarah Chen',
  role: 'Career Changer',
  image: '👩‍💼',
  quote: 'The Ikigai assessment helped me discover roles I never considered. I landed my dream job in tech within 3 months!',
  mpid: "3e6d332e-37cc-4a00-bd1b-1d0c3222e9e2"
}, {
  name: 'James Wilson',
  role: 'Returning Professional',
  image: '👨‍💻',
  quote: 'After a 5-year career break, the CV builder and expert guidance gave me confidence. Now I\'m back stronger than ever.',
  mpid: "608fe315-28ca-47de-be67-8b0fc6aae767"
}, {
  name: 'Priya Patel',
  role: 'Recent Graduate',
  image: '👩‍🎓',
  quote: 'The job matches were spot-on and the community support was invaluable during my search. Worth every penny!',
  mpid: "a471b10d-c6f4-4931-b781-3586a6167a70"
}] as any[];
const stats = [{
  value: '10K+',
  label: 'Active Users',
  mpid: "5d501835-81b0-4b4b-b4eb-cb6b921f8bb9"
}, {
  value: '85%',
  label: 'Success Rate',
  mpid: "5064203b-7cfb-4bce-9780-92cdf31af331"
}, {
  value: '2.3x',
  label: 'Faster Job Placement',
  mpid: "208c517c-bab7-4f17-8022-5378f8e8c579"
}, {
  value: '4.8/5',
  label: 'User Rating',
  mpid: "8bc85f82-41cf-476d-9734-146fd66e528f"
}] as any[];

// @component: CareerLanding
export const CareerLanding = (props: CareerLandingProps) => {
  const [activeTab, setActiveTab] = React.useState<'free' | 'premium'>('premium');

  // @return
  return <SortableContainer dndKitId="976ede8c-ab69-40e8-906f-da3bd54c15e9" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50" data-magicpath-id="0" data-magicpath-path="CareerLanding.tsx">
      {/* Navigation */}
      <SortableContainer dndKitId="114deff1-54a0-4461-9454-27a034bf3e6d" containerType="regular" prevTag="nav" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200" data-magicpath-id="1" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="c699b069-571c-4c21-bba1-5290651f819a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="d632f9b0-c1c9-4a2c-a90c-e4585048b5b3" containerType="regular" prevTag="div" className="flex justify-between items-center h-16" data-magicpath-id="3" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="5310b13c-ca47-4c60-b562-300c49d27213" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="4" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="b8f95dd8-dfd6-4466-898c-b7ede111c1f7" containerType="regular" prevTag="div" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="5" data-magicpath-path="CareerLanding.tsx">
                <Sparkles className="w-6 h-6 text-white" />
              </SortableContainer>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="6" data-magicpath-path="CareerLanding.tsx">
                CareerBox
              </span>
            </SortableContainer>
            <SortableContainer dndKitId="431c96ff-bd3e-4747-9603-74308055f1ce" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="7" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="aaa14a0b-aeb2-444f-9c65-5bc6b518eff8" containerType="regular" prevTag="section" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="13" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="9867c7fd-35eb-42e5-8b7f-200460c7e93f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="14" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="053ee903-b30e-4c72-930d-9b2acdb435b7" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={stagger} className="text-center" data-magicpath-id="15" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="338a6c2e-cab7-42f0-9952-531d20cb7146" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6" data-magicpath-id="16" data-magicpath-path="CareerLanding.tsx">
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
            
            <SortableContainer dndKitId="aa07f287-2527-4556-a18e-2afeb0e09d3d" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="22" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="ed18b867-6c41-4969-8337-191cf685a259" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="23" data-magicpath-path="CareerLanding.tsx">
                <span data-magicpath-id="24" data-magicpath-path="CareerLanding.tsx">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="25" data-magicpath-path="CareerLanding.tsx" />
              </SortableContainer>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-all" data-magicpath-id="26" data-magicpath-path="CareerLanding.tsx">
                Take Free Assessment
              </button>
            </SortableContainer>

            <SortableContainer dndKitId="e694a174-e8da-476a-8b2c-fdaf6cc71693" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="mt-12 flex items-center justify-center space-x-6 text-sm text-gray-600" data-magicpath-id="27" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="5c3dd450-31c6-4d77-861a-409232c57992" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="28" data-magicpath-path="CareerLanding.tsx">
                <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="29" data-magicpath-path="CareerLanding.tsx" />
                <span data-magicpath-id="30" data-magicpath-path="CareerLanding.tsx">No credit card required</span>
              </SortableContainer>
              <SortableContainer dndKitId="ad21fd4c-cc71-4dc6-97af-cc1040e7b540" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="31" data-magicpath-path="CareerLanding.tsx">
                <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="32" data-magicpath-path="CareerLanding.tsx" />
                <span data-magicpath-id="33" data-magicpath-path="CareerLanding.tsx">Cancel anytime</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="63bbc33d-13eb-4055-9154-4e5a439ec0db" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="34" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="acf46c5b-e776-4a0b-bb6f-4a7cec736207" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="35" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="ad00b20e-c6cd-41b2-bb52-c7af1101b7ae" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-8" data-magicpath-id="36" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="bb2bade6-e998-4ade-ac8f-e6eece29668e" containerType="regular" prevTag="section" id="features" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="40" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="54331d55-0a40-4c6c-979f-893f2a2d3b2e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="27a2639c-f25d-4ca1-a705-902e530ecf27" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="42" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="43" data-magicpath-path="CareerLanding.tsx">
              Everything You Need to Succeed
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto" data-magicpath-id="44" data-magicpath-path="CareerLanding.tsx">
              From self-discovery to job offers, we've got you covered at every step of your career journey.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="14c5d483-8b61-46f8-b885-d5e646287c1d" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="45" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="f3849a9a-6c71-4166-844c-a28e1d7f0e30" containerType="regular" prevTag="section" id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50" data-magicpath-id="57" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="0b3521f6-a5c2-4511-81c6-f60919d91cc7" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="58" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="0307bf32-a304-4a3f-9d04-6ad3b3ed0334" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="59" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="60" data-magicpath-path="CareerLanding.tsx">
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="61" data-magicpath-path="CareerLanding.tsx">
              Start free, upgrade when you're ready. No hidden fees.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="fa86d10e-4a3b-4aad-95ac-493912a8fcc0" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="62" data-magicpath-path="CareerLanding.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="131739a7-9525-4f5a-a761-5e4d954cad90" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl p-8 border-2 border-gray-200" data-magicpath-id="63" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="a4f05118-da82-4c83-bc98-f2a65cf0d507" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="64" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" data-magicpath-id="65" data-magicpath-path="CareerLanding.tsx">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2" data-magicpath-id="66" data-magicpath-path="CareerLanding.tsx">£0</div>
                <p className="text-gray-600" data-magicpath-id="67" data-magicpath-path="CareerLanding.tsx">Perfect to get started</p>
              </SortableContainer>
              <SortableContainer dndKitId="0ff59231-d42a-465f-8c46-ffd191268c2c" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="68" data-magicpath-path="CareerLanding.tsx">
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
            <SortableContainer dndKitId="d4aaa52b-beaa-4aee-9965-3b4d1577434d" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="c142d1c2-982f-4a9c-b913-4c9949bb6dca" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="87" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold mb-2" data-magicpath-id="88" data-magicpath-path="CareerLanding.tsx">Premium</h3>
                <div className="text-5xl font-bold mb-2" data-magicpath-id="89" data-magicpath-path="CareerLanding.tsx">£9</div>
                <p className="text-blue-100" data-magicpath-id="90" data-magicpath-path="CareerLanding.tsx">per month</p>
                <div className="mt-4 text-sm text-blue-100" data-magicpath-id="91" data-magicpath-path="CareerLanding.tsx">
                  Save £18 with annual plan (£90/year)
                </div>
              </SortableContainer>
              <SortableContainer dndKitId="e0986338-6351-4502-8261-89a28d3a2e87" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="92" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="c02f61f5-9cde-4871-a315-a93d59793b5f" containerType="regular" prevTag="section" id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="118" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="1856ab76-73e9-41a7-9128-0f81f78da000" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="119" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="60c84eff-6f00-4961-b78a-2f9638dd80b8" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="120" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="121" data-magicpath-path="CareerLanding.tsx">
              Loved by Career Changers
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="122" data-magicpath-path="CareerLanding.tsx">
              Real stories from people who transformed their careers
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="f4f4b92f-d9be-42d2-9968-de7c22b9fb35" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="123" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="956d7bb4-00f3-4645-89d4-78f5f2c0f661" containerType="regular" prevTag="section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600" data-magicpath-id="133" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="6a4cfeef-becc-41e5-ae63-f3d00b37ecfd" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="134" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="cdb9d188-3857-4ba0-9bd3-5b9a92031d18" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="ba2acff9-b822-4628-b329-5609935187c2" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="138" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="c856e1cf-cc36-4cf2-a1a1-9b1efc9317b9" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="139" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="db6b5c21-9adb-428f-a0a2-596f856e22e6" containerType="regular" prevTag="footer" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-300" data-magicpath-id="143" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="1401a4ca-9033-4374-bafc-cd38dd988382" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="144" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="54041c25-550f-4592-b842-bd5338bc94cf" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-8 mb-8" data-magicpath-id="145" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="99c55845-47aa-4d68-b2cc-929036d1f70e" containerType="regular" prevTag="div" data-magicpath-id="146" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="501f8843-48a5-4e83-a1ce-85ee12f9c4cb" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4" data-magicpath-id="147" data-magicpath-path="CareerLanding.tsx">
                <SortableContainer dndKitId="64f320f9-fc0a-4919-8aaf-e09213207b42" containerType="regular" prevTag="div" className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="148" data-magicpath-path="CareerLanding.tsx">
                  <Sparkles className="w-5 h-5 text-white" />
                </SortableContainer>
                <span className="text-lg font-bold text-white" data-magicpath-id="149" data-magicpath-path="CareerLanding.tsx">CareerBox</span>
              </SortableContainer>
              <p className="text-sm text-gray-400" data-magicpath-id="150" data-magicpath-path="CareerLanding.tsx">
                Empowering careers through AI and human expertise.
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="9bec659e-3c25-4ee3-a2a9-f83fd0450856" containerType="regular" prevTag="div" data-magicpath-id="151" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="152" data-magicpath-path="CareerLanding.tsx">Product</h4>
              <SortableContainer dndKitId="fe376482-2bb9-4103-8603-f2ec157f6099" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="153" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="154" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="155" data-magicpath-path="CareerLanding.tsx">Features</a></li>
                <li data-magicpath-id="156" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="157" data-magicpath-path="CareerLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="158" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="159" data-magicpath-path="CareerLanding.tsx">Testimonials</a></li>
                <li data-magicpath-id="160" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="161" data-magicpath-path="CareerLanding.tsx">FAQ</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="fbd51f56-7636-4e69-b34f-ae738521d26d" containerType="regular" prevTag="div" data-magicpath-id="162" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="163" data-magicpath-path="CareerLanding.tsx">Company</h4>
              <SortableContainer dndKitId="0fdae02b-09cb-4918-966a-de0e2bb942f6" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="164" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="165" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="166" data-magicpath-path="CareerLanding.tsx">About</a></li>
                <li data-magicpath-id="167" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="168" data-magicpath-path="CareerLanding.tsx">Blog</a></li>
                <li data-magicpath-id="169" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="170" data-magicpath-path="CareerLanding.tsx">Careers</a></li>
                <li data-magicpath-id="171" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="172" data-magicpath-path="CareerLanding.tsx">Contact</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="b6e775a3-f670-421c-af87-cee41f628778" containerType="regular" prevTag="div" data-magicpath-id="173" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="174" data-magicpath-path="CareerLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="67930b1f-a624-47a1-93a9-0d3c230c4577" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="175" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="176" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="177" data-magicpath-path="CareerLanding.tsx">Privacy Policy</a></li>
                <li data-magicpath-id="178" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="179" data-magicpath-path="CareerLanding.tsx">Terms of Service</a></li>
                <li data-magicpath-id="180" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="181" data-magicpath-path="CareerLanding.tsx">Cookie Policy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="d839af18-2d26-4480-bad5-4c1fb6228daf" containerType="regular" prevTag="div" className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400" data-magicpath-id="182" data-magicpath-path="CareerLanding.tsx">
            <p data-magicpath-id="183" data-magicpath-path="CareerLanding.tsx">© 2024 CareerBox. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};