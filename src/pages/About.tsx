import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">ABOUT</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Design Philosophy
                </h2>
                
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe great design should elevate brands and connect with audiences 
                    on a deeper level. Our practice focuses on creating visuals that 
                    are both impactful and memorable.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded in 2015, our studio has completed over 200 projects across 
                    branding, print, and digital design. Each project begins 
                    with careful listening and ends with thoughtful execution.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">APPROACH</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Research</h4>
                      <p className="text-muted-foreground">Deep understanding of brand identity, audience, and market</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Collaboration</h4>
                      <p className="text-muted-foreground">Close partnership with clients, printers, and developers</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Innovation</h4>
                      <p className="text-muted-foreground">Cutting-edge techniques and forward-thinking design solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">FOUNDED</h3>
                      <p className="text-xl">2015</p>
                    </div>
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">PROJECTS</h3>
                      <p className="text-xl">200+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;