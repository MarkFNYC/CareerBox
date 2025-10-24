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
  mpid: "b51b53a8-e120-46c8-ba91-a7aad7409c68"
}, {
  icon: FileText,
  title: 'CV Builder',
  free: '2 basic templates',
  premium: '15+ ATS-optimized templates',
  mpid: "0c77f952-a00a-424f-b092-8849dfa65c13"
}, {
  icon: Sparkles,
  title: 'LinkedIn Audit',
  free: 'None',
  premium: 'AI-powered monthly audit',
  mpid: "304cf29d-b50a-4db3-ab5d-7adbc0c2c634"
}, {
  icon: Briefcase,
  title: 'Job Matches',
  free: '5 matches/month',
  premium: 'Unlimited with fit scores',
  mpid: "daf466a7-d714-45f0-a8f6-fdde47d7022f"
}, {
  icon: MessageSquare,
  title: 'Expert Q&A',
  free: 'None',
  premium: '1 question/month (48hr response)',
  mpid: "caab1980-39f9-4c50-9a47-e880882c8994"
}, {
  icon: BarChart3,
  title: 'Application Tracker',
  free: 'Track up to 10',
  premium: 'Unlimited + analytics',
  mpid: "9357933d-7125-4cef-ad78-900ba5b6885f"
}, {
  icon: Users2,
  title: 'Community',
  free: 'View-only',
  premium: 'Full access + group coaching',
  mpid: "ce6b63d5-5a54-4baf-b9d2-08c71a790bcf"
}, {
  icon: Calendar,
  title: 'Support',
  free: 'Email (72hr)',
  premium: 'Priority + live chat (24hr)',
  mpid: "7f321ecd-1b01-465d-92d2-0f3e9255cb9a"
}] as any[];
const testimonials = [{
  name: 'Sarah Chen',
  role: 'Career Changer',
  image: '👩‍💼',
  quote: 'The Ikigai assessment helped me discover roles I never considered. I landed my dream job in tech within 3 months!',
  mpid: "bd981798-c43d-4771-b4e3-8f988bf7a77d"
}, {
  name: 'James Wilson',
  role: 'Returning Professional',
  image: '👨‍💻',
  quote: 'After a 5-year career break, the CV builder and expert guidance gave me confidence. Now I\'m back stronger than ever.',
  mpid: "106b0162-e357-41de-bcd4-a8ae6d835482"
}, {
  name: 'Priya Patel',
  role: 'Recent Graduate',
  image: '👩‍🎓',
  quote: 'The job matches were spot-on and the community support was invaluable during my search. Worth every penny!',
  mpid: "a8bd5ccf-fd72-4ef6-89da-d6e1dc291dcd"
}] as any[];
const stats = [{
  value: '10K+',
  label: 'Active Users',
  mpid: "e5bfe0b9-c08e-42ec-b4dc-18da4d8d2f4f"
}, {
  value: '85%',
  label: 'Success Rate',
  mpid: "2aca14f8-a231-4d3a-8f2a-b05168a98eb9"
}, {
  value: '2.3x',
  label: 'Faster Job Placement',
  mpid: "09f11ddb-fd37-4c89-b480-ef68fdfa10da"
}, {
  value: '4.8/5',
  label: 'User Rating',
  mpid: "7ae38460-ed88-4cef-9c00-daf0ebcbb23a"
}] as any[];

// @component: CareerLanding
export const CareerLanding = (props: CareerLandingProps) => {
  const [activeTab, setActiveTab] = React.useState<'free' | 'premium'>('premium');

  // @return
  return <SortableContainer dndKitId="15e44267-fda2-4a3a-8b83-bf86b76451a4" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50" data-magicpath-id="0" data-magicpath-path="CareerLanding.tsx">
      {/* Navigation */}
      <SortableContainer dndKitId="997b8350-d7af-45aa-8ea0-4a58ddbd28a4" containerType="regular" prevTag="nav" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200" data-magicpath-id="1" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="820b27a2-c0b2-4580-a0fa-0a3cd726b316" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="06cb0453-fd34-4331-adce-a26aa46c58c4" containerType="regular" prevTag="div" className="flex justify-between items-center h-16" data-magicpath-id="3" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="d46dfcfc-eda6-417e-92c1-1b77d7aea925" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="4" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="e1ba8813-c711-473c-b813-ef108255c8fd" containerType="regular" prevTag="div" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="5" data-magicpath-path="CareerLanding.tsx">
                <Sparkles className="w-6 h-6 text-white" />
              </SortableContainer>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="6" data-magicpath-path="CareerLanding.tsx">
                CareerBox
              </span>
            </SortableContainer>
            <SortableContainer dndKitId="faf1b16b-b78c-4e48-b7e8-e7fe181af51b" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="7" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="b9b93f8f-0d9f-4139-9a79-8604bcf5c383" containerType="regular" prevTag="section" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="13" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="524ef25f-bac7-42b9-8e3d-27f826ad7c11" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="14" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="eb0395d8-c9fb-492c-89ba-8f2baf04f1cb" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={stagger} className="text-center" data-magicpath-id="15" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="a83ec932-9667-43d4-b9f6-a1cec15b90fc" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6" data-magicpath-id="16" data-magicpath-path="CareerLanding.tsx">
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
            
            <SortableContainer dndKitId="7b3bf59f-c568-49cc-b546-cc26132ff9dc" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="22" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="869ab8f4-b622-4a71-9b3d-6c13f719717f" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="23" data-magicpath-path="CareerLanding.tsx">
                <span data-magicpath-id="24" data-magicpath-path="CareerLanding.tsx">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="25" data-magicpath-path="CareerLanding.tsx" />
              </SortableContainer>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-all" data-magicpath-id="26" data-magicpath-path="CareerLanding.tsx">
                Take Free Assessment
              </button>
            </SortableContainer>

            <SortableContainer dndKitId="394e6409-66ed-4467-9678-d416892ed12b" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="mt-12 flex items-center justify-center space-x-6 text-sm text-gray-600" data-magicpath-id="27" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="4bba4d8e-e763-4dad-af4f-2d5d10cbe93d" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="28" data-magicpath-path="CareerLanding.tsx">
                <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="29" data-magicpath-path="CareerLanding.tsx" />
                <span data-magicpath-id="30" data-magicpath-path="CareerLanding.tsx">No credit card required</span>
              </SortableContainer>
              <SortableContainer dndKitId="901ea62a-b4e5-435c-acb1-f83c8907b151" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="31" data-magicpath-path="CareerLanding.tsx">
                <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="32" data-magicpath-path="CareerLanding.tsx" />
                <span data-magicpath-id="33" data-magicpath-path="CareerLanding.tsx">Cancel anytime</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="8a084cb9-8f81-4d5d-b55f-52f1e4fc2578" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="34" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="3209d0ea-9e1e-4e97-9c01-af6c0c0787b8" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="35" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="47acfcbe-37e6-4915-9431-1873d833dd1b" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-8" data-magicpath-id="36" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="5c15131b-8e4c-45da-95f1-38ba9b206444" containerType="regular" prevTag="section" id="features" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="40" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="272a10a6-28ac-447f-be46-c0bd8069274b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="32b91610-101e-428c-a64c-913cddb26769" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="42" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="43" data-magicpath-path="CareerLanding.tsx">
              Everything You Need to Succeed
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto" data-magicpath-id="44" data-magicpath-path="CareerLanding.tsx">
              From self-discovery to job offers, we've got you covered at every step of your career journey.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="bdcfaa15-88d5-4834-af29-7c5bcbf542c6" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="45" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="8d4de136-5943-490d-bdc5-20c48aa5e215" containerType="regular" prevTag="section" id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50" data-magicpath-id="57" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="8f0a7ab7-d580-4c63-8036-b1df14d7faef" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="58" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="61841b00-77b9-4895-a0fb-2bfc8ea3f791" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="59" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="60" data-magicpath-path="CareerLanding.tsx">
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="61" data-magicpath-path="CareerLanding.tsx">
              Start free, upgrade when you're ready. No hidden fees.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="a4008574-0f7d-463e-8ace-55051fed308b" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="62" data-magicpath-path="CareerLanding.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="27461a04-2bfb-4125-bdb4-00e9c65404b0" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl p-8 border-2 border-gray-200" data-magicpath-id="63" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="8990a943-35e3-4d7a-908e-bae75de569c0" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="64" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" data-magicpath-id="65" data-magicpath-path="CareerLanding.tsx">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2" data-magicpath-id="66" data-magicpath-path="CareerLanding.tsx">£0</div>
                <p className="text-gray-600" data-magicpath-id="67" data-magicpath-path="CareerLanding.tsx">Perfect to get started</p>
              </SortableContainer>
              <SortableContainer dndKitId="c0702b3e-ebed-4719-b338-646bc8dd0056" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="68" data-magicpath-path="CareerLanding.tsx">
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
            <SortableContainer dndKitId="01217bba-ed7a-4b66-a125-64a4d510fb8d" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="93987b01-5d7a-4356-8cf3-efdb59b2f157" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="87" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold mb-2" data-magicpath-id="88" data-magicpath-path="CareerLanding.tsx">Premium</h3>
                <div className="text-5xl font-bold mb-2" data-magicpath-id="89" data-magicpath-path="CareerLanding.tsx">£9</div>
                <p className="text-blue-100" data-magicpath-id="90" data-magicpath-path="CareerLanding.tsx">per month</p>
                <div className="mt-4 text-sm text-blue-100" data-magicpath-id="91" data-magicpath-path="CareerLanding.tsx">
                  Save £18 with annual plan (£90/year)
                </div>
              </SortableContainer>
              <SortableContainer dndKitId="1b4be908-9dd0-48e4-860f-c16aa487394c" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="92" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="1963269f-871e-4410-8f0f-6d7c257b7b2f" containerType="regular" prevTag="section" id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="118" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="e1d77a5d-87cc-450f-802e-8e0ecaee134d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="119" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="01be8d56-c9bf-43f5-af82-dfff20f7dd1d" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="120" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="121" data-magicpath-path="CareerLanding.tsx">
              Loved by Career Changers
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="122" data-magicpath-path="CareerLanding.tsx">
              Real stories from people who transformed their careers
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="33eda879-d347-42db-977d-a40ce6071faf" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="123" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="dd4cf3fd-63dc-4ab8-a423-c743070a678f" containerType="regular" prevTag="section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600" data-magicpath-id="133" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="a84d89e2-7bef-4c7e-b75c-22be291573d5" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="134" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="0dd0bf72-66b3-4518-9483-43fb187b933b" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="0f393827-4f54-42b5-bbd0-e6fa6fe89f84" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="138" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="84f0bb61-b318-4127-8353-c33cc3eec463" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="139" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="1a293eef-3b42-4c80-8c5d-d3a966960f14" containerType="regular" prevTag="footer" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-300" data-magicpath-id="143" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="f45c709e-74ed-459a-81b1-ddf1efa2591d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="144" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="692c55e1-d02c-489b-aaa0-e7b036520b2e" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-8 mb-8" data-magicpath-id="145" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="bbe4ac6d-9a3d-4fea-835f-48679ed5fc7a" containerType="regular" prevTag="div" data-magicpath-id="146" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="918b48e5-bcfa-4fef-931a-62d469198448" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4" data-magicpath-id="147" data-magicpath-path="CareerLanding.tsx">
                <SortableContainer dndKitId="0dbc8fd8-d881-46e5-839e-e78666caadda" containerType="regular" prevTag="div" className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="148" data-magicpath-path="CareerLanding.tsx">
                  <Sparkles className="w-5 h-5 text-white" />
                </SortableContainer>
                <span className="text-lg font-bold text-white" data-magicpath-id="149" data-magicpath-path="CareerLanding.tsx">CareerBox</span>
              </SortableContainer>
              <p className="text-sm text-gray-400" data-magicpath-id="150" data-magicpath-path="CareerLanding.tsx">
                Empowering careers through AI and human expertise.
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="3ac66028-6c72-482d-89ec-95b8989d119c" containerType="regular" prevTag="div" data-magicpath-id="151" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="152" data-magicpath-path="CareerLanding.tsx">Product</h4>
              <SortableContainer dndKitId="bc6bb896-93f2-4aa0-9e99-a57dea49ed27" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="153" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="154" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="155" data-magicpath-path="CareerLanding.tsx">Features</a></li>
                <li data-magicpath-id="156" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="157" data-magicpath-path="CareerLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="158" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="159" data-magicpath-path="CareerLanding.tsx">Testimonials</a></li>
                <li data-magicpath-id="160" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="161" data-magicpath-path="CareerLanding.tsx">FAQ</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="e5921aa9-307e-4bb1-b40f-47027bcbf27a" containerType="regular" prevTag="div" data-magicpath-id="162" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="163" data-magicpath-path="CareerLanding.tsx">Company</h4>
              <SortableContainer dndKitId="aa57faba-8a55-46fa-8e1c-3388c6dde19a" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="164" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="165" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="166" data-magicpath-path="CareerLanding.tsx">About</a></li>
                <li data-magicpath-id="167" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="168" data-magicpath-path="CareerLanding.tsx">Blog</a></li>
                <li data-magicpath-id="169" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="170" data-magicpath-path="CareerLanding.tsx">Careers</a></li>
                <li data-magicpath-id="171" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="172" data-magicpath-path="CareerLanding.tsx">Contact</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="fb48a0a5-368f-407f-bc34-0f87c73dba6a" containerType="regular" prevTag="div" data-magicpath-id="173" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="174" data-magicpath-path="CareerLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="037c5446-0363-4ec8-b247-de1a14845522" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="175" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="176" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="177" data-magicpath-path="CareerLanding.tsx">Privacy Policy</a></li>
                <li data-magicpath-id="178" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="179" data-magicpath-path="CareerLanding.tsx">Terms of Service</a></li>
                <li data-magicpath-id="180" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="181" data-magicpath-path="CareerLanding.tsx">Cookie Policy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="501b27fd-19db-41a1-814a-f1d3ee25ebf8" containerType="regular" prevTag="div" className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400" data-magicpath-id="182" data-magicpath-path="CareerLanding.tsx">
            <p data-magicpath-id="183" data-magicpath-path="CareerLanding.tsx">© 2024 CareerBox. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};