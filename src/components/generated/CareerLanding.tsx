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
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  mpid: "1b437df0-c0ad-42f7-87dc-22f152a68368"
}, {
  icon: FileText,
  title: 'CV Builder',
  free: '2 basic templates',
  premium: '15+ ATS-optimized templates',
  image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
  mpid: "dcd4192f-6576-4939-9503-52d7d5837bd5"
}, {
  icon: Sparkles,
  title: 'LinkedIn Audit',
  free: 'None',
  premium: 'AI-powered monthly audit',
  image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=300&fit=crop',
  mpid: "147cd46e-780e-4ff1-8a21-c7c74c84f6de"
}, {
  icon: Briefcase,
  title: 'Job Matches',
  free: '5 matches/month',
  premium: 'Unlimited with fit scores',
  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop',
  mpid: "a04877ba-a7f4-4f9c-9716-f79ae822a14c"
}, {
  icon: MessageSquare,
  title: 'Expert Q&A',
  free: 'None',
  premium: '1 question/month (48hr response)',
  image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
  mpid: "ec84e38c-c24d-46ee-a13d-310a70e6682b"
}, {
  icon: BarChart3,
  title: 'Application Tracker',
  free: 'Track up to 10',
  premium: 'Unlimited + analytics',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  mpid: "774caf8f-642c-4aeb-ba02-16a5b56e8a42"
}, {
  icon: Users2,
  title: 'Community',
  free: 'View-only',
  premium: 'Full access + group coaching',
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
  mpid: "0d0758db-4062-4918-8e94-5b9e05fa2684"
}, {
  icon: Calendar,
  title: 'Support',
  free: 'Email (72hr)',
  premium: 'Priority + live chat (24hr)',
  image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
  mpid: "f39a7231-3d94-4e36-b09f-56779cd4e9a7"
}] as any[];
const testimonials = [{
  name: 'Sarah Chen',
  role: 'Career Changer',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
  quote: 'The Ikigai assessment helped me discover roles I never considered. I landed my dream job in tech within 3 months!',
  mpid: "62e653b6-2bf9-48ef-a6ed-e0f974e8fe97"
}, {
  name: 'James Wilson',
  role: 'Returning Professional',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
  quote: 'After a 5-year career break, the CV builder and expert guidance gave me confidence. Now I\'m back stronger than ever.',
  mpid: "421123a0-9c0f-49f5-95a4-2fd2a6ee5143"
}, {
  name: 'Priya Patel',
  role: 'Recent Graduate',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
  quote: 'The job matches were spot-on and the community support was invaluable during my search. Worth every penny!',
  mpid: "6fd63ab6-5c49-4e21-a64e-1b28ce06508b"
}] as any[];
const stats = [{
  value: '10K+',
  label: 'Active Users',
  mpid: "80bfe697-4446-4e1f-920c-6ce16c224b75"
}, {
  value: '85%',
  label: 'Success Rate',
  mpid: "38c0f727-0d17-4495-b99d-3b441e725075"
}, {
  value: '2.3x',
  label: 'Faster Job Placement',
  mpid: "35c1a979-85b1-4dc9-84de-2f14d28ce93a"
}, {
  value: '4.8/5',
  label: 'User Rating',
  mpid: "df1b7b77-b186-4708-8180-def013db59d7"
}] as any[];

// @component: CareerLanding
export const CareerLanding = (props: CareerLandingProps) => {
  const [activeTab, setActiveTab] = React.useState<'free' | 'premium'>('premium');

  // @return
  return <SortableContainer dndKitId="76a3db64-11b1-4bba-821c-7eee65d5b928" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50" data-magicpath-id="0" data-magicpath-path="CareerLanding.tsx">
      {/* Navigation */}
      <SortableContainer dndKitId="bef5b484-b440-4501-a27e-1333d3bc2407" containerType="regular" prevTag="nav" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200" data-magicpath-id="1" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="03311ef4-2422-4c2e-916e-fadf530ec2e2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="4e94c9ba-6117-414a-978a-83679c5f0506" containerType="regular" prevTag="div" className="flex justify-between items-center h-16" data-magicpath-id="3" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="31bf7508-43fe-43c7-b60d-287b89d45f39" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="4" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="00dd9cf0-0398-43d1-b0e8-791741747888" containerType="regular" prevTag="div" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="5" data-magicpath-path="CareerLanding.tsx">
                <Sparkles className="w-6 h-6 text-white" />
              </SortableContainer>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="6" data-magicpath-path="CareerLanding.tsx">
                CareerBox
              </span>
            </SortableContainer>
            <SortableContainer dndKitId="f3a39568-60ea-46ad-931e-4bf249d85650" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="7" data-magicpath-path="CareerLanding.tsx">
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
      <SortableContainer dndKitId="4d5917d6-913b-4b96-8153-5af465cd8cc3" containerType="regular" prevTag="section" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="13" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="37d29251-3424-440e-9b59-77d5c298d20c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="14" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="e480c66d-1d9f-46da-9819-ab76e87f9475" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="15" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="1c99e989-16db-4f13-baa9-cbc441574774" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={stagger} data-magicpath-id="16" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="80984182-1116-4db9-9a68-a4a2d9ac1b52" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6" data-magicpath-id="17" data-magicpath-path="CareerLanding.tsx">
                <Sparkles className="w-4 h-4" />
                <span data-magicpath-id="18" data-magicpath-path="CareerLanding.tsx">Transform Your Career Journey</span>
              </SortableContainer>
              
              <motion.h1 data-magicpath-motion-tag="motion.h1" variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight" data-magicpath-id="19" data-magicpath-path="CareerLanding.tsx">
                Find Your Perfect Career Path
                <br data-magicpath-id="20" data-magicpath-path="CareerLanding.tsx" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="21" data-magicpath-path="CareerLanding.tsx">
                  For Just £9/month
                </span>
              </motion.h1>
              
              <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600 mb-8" data-magicpath-id="22" data-magicpath-path="CareerLanding.tsx">
                AI-powered tools, personality profiling, and expert guidance to help you land your dream job. 
                Join thousands who've transformed their careers.
              </motion.p>
              
              <SortableContainer dndKitId="fc9660e6-7b86-4e19-9703-19130f1e052c" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="23" data-magicpath-path="CareerLanding.tsx">
                <SortableContainer dndKitId="c74d0861-7eec-4c13-a793-68129de5a1f7" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="24" data-magicpath-path="CareerLanding.tsx">
                  <span data-magicpath-id="25" data-magicpath-path="CareerLanding.tsx">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="26" data-magicpath-path="CareerLanding.tsx" />
                </SortableContainer>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-all" data-magicpath-id="27" data-magicpath-path="CareerLanding.tsx">
                  Take Free Assessment
                </button>
              </SortableContainer>

              <SortableContainer dndKitId="b4ef26f9-b396-4047-99ac-72c724c586ad" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="mt-8 flex items-center space-x-6 text-sm text-gray-600" data-magicpath-id="28" data-magicpath-path="CareerLanding.tsx">
                <SortableContainer dndKitId="47874e09-f721-4e45-8390-2462b2717e79" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="29" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="30" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="31" data-magicpath-path="CareerLanding.tsx">No credit card required</span>
                </SortableContainer>
                <SortableContainer dndKitId="4ce66375-a771-4bf1-8ab0-5c34004023f0" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="32" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="33" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="34" data-magicpath-path="CareerLanding.tsx">Cancel anytime</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="e2c3f1a4-830b-4a37-a2dc-028df9ef31a6" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }} className="relative hidden lg:block" data-magicpath-id="35" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="b304d5b6-300f-4097-b740-02ae33709a9c" containerType="regular" prevTag="div" className="relative rounded-2xl overflow-hidden shadow-2xl" data-magicpath-id="36" data-magicpath-path="CareerLanding.tsx">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" alt="Professional team collaborating on career development" className="w-full h-auto object-cover" data-magicpath-id="37" data-magicpath-path="CareerLanding.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" data-magicpath-id="38" data-magicpath-path="CareerLanding.tsx"></div>
              </SortableContainer>
              <SortableContainer dndKitId="46338ef8-5656-43ac-b998-e5273aedfe8f" containerType="regular" prevTag="div" className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center space-x-3" data-magicpath-id="39" data-magicpath-path="CareerLanding.tsx">
                <SortableContainer dndKitId="589429cf-1fd9-4471-a9de-1cd110e639b4" containerType="regular" prevTag="div" className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center" data-magicpath-id="40" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-6 h-6 text-green-600" data-magicpath-id="41" data-magicpath-path="CareerLanding.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="6e3bca73-b07b-474f-a4a2-b6ea18c86539" containerType="regular" prevTag="div" data-magicpath-id="42" data-magicpath-path="CareerLanding.tsx">
                  <div className="font-semibold text-gray-900" data-magicpath-id="43" data-magicpath-path="CareerLanding.tsx">2,500+ Jobs</div>
                  <div className="text-sm text-gray-600" data-magicpath-id="44" data-magicpath-path="CareerLanding.tsx">Matched This Week</div>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="315462ec-caa2-4372-ad2c-da0304754c4d" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="45" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="cca471b5-e5c9-43bc-8d72-1a485527acc9" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="46" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="6e774e8d-45aa-448c-9f3f-fd7d74f2fb13" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-8" data-magicpath-id="47" data-magicpath-path="CareerLanding.tsx">
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
          }} className="text-center" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="CareerLanding.tsx">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:unknown" data-magicpath-id="49" data-magicpath-path="CareerLanding.tsx">
                  {stat.value}
                </div>
                <div className="text-gray-600" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="50" data-magicpath-path="CareerLanding.tsx">{stat.label}</div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Features Section */}
      <SortableContainer dndKitId="c12557cc-be99-49e5-821a-77e0d7cbf7b2" containerType="regular" prevTag="section" id="features" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="51" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="5b7f1638-d2ef-4d5e-a9b0-417859e41abf" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="52" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="fa56e7d1-6d74-44b2-b278-d3c23916192b" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="53" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="54" data-magicpath-path="CareerLanding.tsx">
              Everything You Need to Succeed
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto" data-magicpath-id="55" data-magicpath-path="CareerLanding.tsx">
              From self-discovery to job offers, we've got you covered at every step of your career journey.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="86bd6c37-775d-4ba8-93f2-a9b9b38b379b" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="56" data-magicpath-path="CareerLanding.tsx">
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
          }} className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all overflow-hidden group" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="CareerLanding.tsx">
                <div className="relative h-40 overflow-hidden" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="CareerLanding.tsx">
                  <img src={feature.image} alt={`${feature.title} feature visualization`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="59" data-magicpath-path="CareerLanding.tsx" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="60" data-magicpath-path="CareerLanding.tsx"></div>
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="61" data-magicpath-path="CareerLanding.tsx">
                    <feature.icon className="w-5 h-5 text-blue-600" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="CareerLanding.tsx" />
                  </div>
                </div>
                <div className="p-6" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="63" data-magicpath-path="CareerLanding.tsx">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="64" data-magicpath-path="CareerLanding.tsx">{feature.title}</h3>
                  <div className="space-y-2 text-sm" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="CareerLanding.tsx">
                    <div className="flex items-start space-x-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="CareerLanding.tsx">
                      <span className="text-gray-500 mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="CareerLanding.tsx">Free:</span>
                      <span className="text-gray-600" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="free:unknown" data-magicpath-id="68" data-magicpath-path="CareerLanding.tsx">{feature.free}</span>
                    </div>
                    <div className="flex items-start space-x-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="CareerLanding.tsx">
                      <span className="text-blue-600 font-medium mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="CareerLanding.tsx">Premium:</span>
                      <span className="text-gray-900" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="premium:unknown" data-magicpath-id="71" data-magicpath-path="CareerLanding.tsx">{feature.premium}</span>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing Section */}
      <SortableContainer dndKitId="d483c934-9f16-40cd-9a6c-8c06be1a6c95" containerType="regular" prevTag="section" id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50" data-magicpath-id="72" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="0eb675dc-3c88-4885-b0e3-cc84a66715a3" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="73" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="6d42f0c8-a150-4c02-9da6-a1f67a00ddf7" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="74" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="75" data-magicpath-path="CareerLanding.tsx">
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="76" data-magicpath-path="CareerLanding.tsx">
              Start free, upgrade when you're ready. No hidden fees.
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="29d59e84-5a18-4566-ba8c-8fb3eda3b5cd" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="77" data-magicpath-path="CareerLanding.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="fdaeacb4-9e50-4412-8f47-e9477cab8eea" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl p-8 border-2 border-gray-200" data-magicpath-id="78" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="e15c3880-266b-4180-88b4-36c080863845" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="79" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" data-magicpath-id="80" data-magicpath-path="CareerLanding.tsx">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2" data-magicpath-id="81" data-magicpath-path="CareerLanding.tsx">£0</div>
                <p className="text-gray-600" data-magicpath-id="82" data-magicpath-path="CareerLanding.tsx">Perfect to get started</p>
              </SortableContainer>
              <SortableContainer dndKitId="f6ff9fc8-2234-4605-af20-eb9ef846206a" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="83" data-magicpath-path="CareerLanding.tsx">
                <li className="flex items-start space-x-3" data-magicpath-id="84" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="85" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="86" data-magicpath-path="CareerLanding.tsx">Basic Ikigai assessment</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="87" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="88" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="89" data-magicpath-path="CareerLanding.tsx">2 CV templates</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="90" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="91" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="92" data-magicpath-path="CareerLanding.tsx">5 job matches per month</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="93" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="94" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="95" data-magicpath-path="CareerLanding.tsx">Track up to 10 applications</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="96" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-magicpath-id="97" data-magicpath-path="CareerLanding.tsx" />
                  <span className="text-gray-600" data-magicpath-id="98" data-magicpath-path="CareerLanding.tsx">View-only community access</span>
                </li>
              </SortableContainer>
              <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors" data-magicpath-id="99" data-magicpath-path="CareerLanding.tsx">
                Start Free
              </button>
            </SortableContainer>

            {/* Premium Plan */}
            <SortableContainer dndKitId="0f1f9c84-bce0-4461-b11a-dbb8941dadb5" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden" data-magicpath-id="100" data-magicpath-path="CareerLanding.tsx">
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold" data-magicpath-id="101" data-magicpath-path="CareerLanding.tsx">
                Popular
              </div>
              <SortableContainer dndKitId="1a536bd6-1862-4195-89f4-d6746b5ad14f" containerType="regular" prevTag="div" className="text-center mb-6" data-magicpath-id="102" data-magicpath-path="CareerLanding.tsx">
                <h3 className="text-2xl font-bold mb-2" data-magicpath-id="103" data-magicpath-path="CareerLanding.tsx">Premium</h3>
                <div className="text-5xl font-bold mb-2" data-magicpath-id="104" data-magicpath-path="CareerLanding.tsx">£9</div>
                <p className="text-blue-100" data-magicpath-id="105" data-magicpath-path="CareerLanding.tsx">per month</p>
                <div className="mt-4 text-sm text-blue-100" data-magicpath-id="106" data-magicpath-path="CareerLanding.tsx">
                  Save £18 with annual plan (£90/year)
                </div>
              </SortableContainer>
              <SortableContainer dndKitId="16ba521f-4efd-4b05-9356-11a111e4bef1" containerType="regular" prevTag="ul" className="space-y-4 mb-8" data-magicpath-id="107" data-magicpath-path="CareerLanding.tsx">
                <li className="flex items-start space-x-3" data-magicpath-id="108" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="109" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="110" data-magicpath-path="CareerLanding.tsx">Full 50-question Ikigai assessment</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="111" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="112" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="113" data-magicpath-path="CareerLanding.tsx">15+ ATS-optimized CV templates</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="114" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="115" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="116" data-magicpath-path="CareerLanding.tsx">AI-powered LinkedIn profile audit</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="117" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="118" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="119" data-magicpath-path="CareerLanding.tsx">Unlimited job matches with fit scores</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="120" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="121" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="122" data-magicpath-path="CareerLanding.tsx">1 expert Q&A per month</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="123" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="124" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="125" data-magicpath-path="CareerLanding.tsx">Unlimited application tracking + analytics</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="126" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="127" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="128" data-magicpath-path="CareerLanding.tsx">Full community + monthly group coaching</span>
                </li>
                <li className="flex items-start space-x-3" data-magicpath-id="129" data-magicpath-path="CareerLanding.tsx">
                  <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" data-magicpath-id="130" data-magicpath-path="CareerLanding.tsx" />
                  <span data-magicpath-id="131" data-magicpath-path="CareerLanding.tsx">Priority support with 24hr response</span>
                </li>
              </SortableContainer>
              <button className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all" data-magicpath-id="132" data-magicpath-path="CareerLanding.tsx">
                Start Premium Trial
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Testimonials */}
      <SortableContainer dndKitId="04e41fd5-16b3-42c6-8473-0c9eafa8db34" containerType="regular" prevTag="section" id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="133" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="13bbb919-2222-4d21-997c-90e63cc63988" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="134" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="657182d7-f17d-4d8b-a6ea-af5d31bdfb2f" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={stagger} className="text-center mb-16" data-magicpath-id="135" data-magicpath-path="CareerLanding.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-magicpath-id="136" data-magicpath-path="CareerLanding.tsx">
              Loved by Career Changers
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-gray-600" data-magicpath-id="137" data-magicpath-path="CareerLanding.tsx">
              Real stories from people who transformed their careers
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="6e7f4d65-0e64-48b6-8dc2-e309462ab786" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="138" data-magicpath-path="CareerLanding.tsx">
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
          }} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="CareerLanding.tsx">
                <div className="flex items-center space-x-1 mb-4" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="CareerLanding.tsx">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="CareerLanding.tsx" />)}
                </div>
                <p className="text-gray-700 mb-6 italic" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="quote:unknown" data-magicpath-id="142" data-magicpath-path="CareerLanding.tsx">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="CareerLanding.tsx">
                  <img src={testimonial.image} alt={`${testimonial.name} profile photo`} className="w-12 h-12 rounded-full object-cover" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="144" data-magicpath-path="CareerLanding.tsx" />
                  <div data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="CareerLanding.tsx">
                    <div className="font-semibold text-gray-900" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="146" data-magicpath-path="CareerLanding.tsx">{testimonial.name}</div>
                    <div className="text-sm text-gray-600" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="147" data-magicpath-path="CareerLanding.tsx">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* CTA Section */}
      <SortableContainer dndKitId="b8e3f603-3683-4a93-9448-f8419413ab34" containerType="regular" prevTag="section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600" data-magicpath-id="148" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="fa8360da-52a8-4105-b69e-967161a8e837" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="149" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="465c5fed-003e-48d2-95ad-582de996b2e7" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} data-magicpath-id="150" data-magicpath-path="CareerLanding.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-magicpath-id="151" data-magicpath-path="CareerLanding.tsx">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8" data-magicpath-id="152" data-magicpath-path="CareerLanding.tsx">
              Join 10,000+ professionals who've found their dream jobs. Start your journey today.
            </p>
            <SortableContainer dndKitId="06a624d9-0808-43f6-857e-03abe057b245" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-magicpath-id="153" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="b490a9bc-6d14-4540-89f0-e216aa4667cb" containerType="regular" prevTag="button" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group" data-magicpath-id="154" data-magicpath-path="CareerLanding.tsx">
                <span data-magicpath-id="155" data-magicpath-path="CareerLanding.tsx">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="156" data-magicpath-path="CareerLanding.tsx" />
              </SortableContainer>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all" data-magicpath-id="157" data-magicpath-path="CareerLanding.tsx">
                View Demo
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="f88d8930-9a68-47b9-8ec9-90a39544a017" containerType="regular" prevTag="footer" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-300" data-magicpath-id="158" data-magicpath-path="CareerLanding.tsx">
        <SortableContainer dndKitId="3d58a837-a7cd-43a2-b045-a72af003c6f1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="159" data-magicpath-path="CareerLanding.tsx">
          <SortableContainer dndKitId="4e541b4c-6221-43a1-bebe-84b17437c1ba" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-8 mb-8" data-magicpath-id="160" data-magicpath-path="CareerLanding.tsx">
            <SortableContainer dndKitId="deabddec-985f-49e3-a4dd-0a85c45b107d" containerType="regular" prevTag="div" data-magicpath-id="161" data-magicpath-path="CareerLanding.tsx">
              <SortableContainer dndKitId="9a636372-af95-4128-88f8-fb59de4844ab" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4" data-magicpath-id="162" data-magicpath-path="CareerLanding.tsx">
                <SortableContainer dndKitId="d4b11224-3c73-4eee-a394-a60dcb54bba1" containerType="regular" prevTag="div" className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" data-magicpath-id="163" data-magicpath-path="CareerLanding.tsx">
                  <Sparkles className="w-5 h-5 text-white" />
                </SortableContainer>
                <span className="text-lg font-bold text-white" data-magicpath-id="164" data-magicpath-path="CareerLanding.tsx">CareerBox</span>
              </SortableContainer>
              <p className="text-sm text-gray-400" data-magicpath-id="165" data-magicpath-path="CareerLanding.tsx">
                Empowering careers through AI and human expertise.
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="c2306b06-1b79-4d06-b160-2eb4fa83b10e" containerType="regular" prevTag="div" data-magicpath-id="166" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="167" data-magicpath-path="CareerLanding.tsx">Product</h4>
              <SortableContainer dndKitId="d263e78b-7a9d-498b-81cf-f6f7c5a1125a" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="168" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="169" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="170" data-magicpath-path="CareerLanding.tsx">Features</a></li>
                <li data-magicpath-id="171" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="172" data-magicpath-path="CareerLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="173" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="174" data-magicpath-path="CareerLanding.tsx">Testimonials</a></li>
                <li data-magicpath-id="175" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="176" data-magicpath-path="CareerLanding.tsx">FAQ</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="b84f8e9f-218c-4a91-984c-70a6baf95363" containerType="regular" prevTag="div" data-magicpath-id="177" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="178" data-magicpath-path="CareerLanding.tsx">Company</h4>
              <SortableContainer dndKitId="1a2444dc-9009-4f02-84f1-c73b4f1c5759" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="179" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="180" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="181" data-magicpath-path="CareerLanding.tsx">About</a></li>
                <li data-magicpath-id="182" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="183" data-magicpath-path="CareerLanding.tsx">Blog</a></li>
                <li data-magicpath-id="184" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="185" data-magicpath-path="CareerLanding.tsx">Careers</a></li>
                <li data-magicpath-id="186" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="187" data-magicpath-path="CareerLanding.tsx">Contact</a></li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="2ea40377-9216-4e7d-af11-9cfa6eece6c1" containerType="regular" prevTag="div" data-magicpath-id="188" data-magicpath-path="CareerLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="189" data-magicpath-path="CareerLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="03516d22-9d2c-4087-acc6-8f607d8e2b94" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="190" data-magicpath-path="CareerLanding.tsx">
                <li data-magicpath-id="191" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="192" data-magicpath-path="CareerLanding.tsx">Privacy Policy</a></li>
                <li data-magicpath-id="193" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="194" data-magicpath-path="CareerLanding.tsx">Terms of Service</a></li>
                <li data-magicpath-id="195" data-magicpath-path="CareerLanding.tsx"><a href="#" className="hover:text-white transition-colors" data-magicpath-id="196" data-magicpath-path="CareerLanding.tsx">Cookie Policy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="991ee48e-8c52-44dd-a964-3aedc02b1082" containerType="regular" prevTag="div" className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400" data-magicpath-id="197" data-magicpath-path="CareerLanding.tsx">
            <p data-magicpath-id="198" data-magicpath-path="CareerLanding.tsx">© 2024 CareerBox. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};