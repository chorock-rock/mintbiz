import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, ArrowRight, FileText, Users, TrendingUp } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold text-secondary">MINTBIZ</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">기능</a>
              <a href="#marketplace" className="text-foreground hover:text-primary transition-colors">거래소</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">작동방식</a>
              <a href="#use-cases" className="text-foreground hover:text-primary transition-colors">거래사례</a>
              <Button className="gradient-mint text-white border-0">거래 시작</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">비즈니스 계약 NFT 거래소</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">수익성이 좋은 비즈니스를</span><br />
            <span className="text-secondary">NFT로 거래해보세요</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            헬스장 회원계약 30건, 카페 프랜차이즈 계약, 렌탈샵 장비계약 12건...<br />
            <strong className="text-primary">실제 비즈니스 계약을 NFT로 민팅하고 거래하세요!</strong><br />
            계약에서 나오는 수익을 받거나, 계약 NFT를 양도해서 수익을 올리세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-mint text-white border-0 shadow-mint">
              계약 NFT 민팅 시작 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              계약 거래소 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary">MintBiz의 핵심 기능</h2>
            <p className="text-xl text-muted-foreground">블록체인 기술로 계약의 새로운 패러다임을 제시합니다</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 shadow-mint hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-secondary">계약 인증</CardTitle>
                <CardDescription>
                  블록체인에 기록된 위변조 불가능한 계약 증명
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />진본성 보장</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />자동 이력 추적</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />투명한 소유권</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-mint hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-secondary">스마트 관리</CardTitle>
                <CardDescription>
                  자동화된 계약 생명주기 관리 시스템
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />자동 만료 관리</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />실시간 상태 업데이트</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />알림 시스템</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-mint hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="text-secondary">권리 거래</CardTitle>
                <CardDescription>
                  안전하고 투명한 계약 권리 이전 마켓플레이스
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-secondary mr-2" />P2P 거래</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-secondary mr-2" />에스크로 보호</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-secondary mr-2" />수수료 최소화</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary">실시간 비즈니스 계약 거래소</h2>
            <p className="text-xl text-muted-foreground">실제 비즈니스 계약이 실시간으로 거래되고 있습니다</p>
          </div>
          
          {/* Trading Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">1,247</div>
                <div className="text-sm text-muted-foreground">총 비즈니스 계약 NFT</div>
              </CardContent>
            </Card>
            <Card className="text-center border-accent/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">₩847억</div>
                <div className="text-sm text-muted-foreground">계약 총 가치 규모</div>
              </CardContent>
            </Card>
            <Card className="text-center border-secondary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-secondary mb-2">18.4%</div>
                <div className="text-sm text-muted-foreground">평균 월 수익률</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">2,156</div>
                <div className="text-sm text-muted-foreground">활성 투자자</div>
              </CardContent>
            </Card>
          </div>

          {/* Live Trading Feed */}
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-secondary">실시간 비즈니스 계약 거래</h3>
            <div className="space-y-3">
              {[{
              type: "헬스장 회원계약 45건",
              detail: "회원 45명 × 월 18만원",
              monthlyRevenue: "월 810만원",
              price: "₩1억 2,000만원",
              status: "거래 완료",
              time: "3분 전",
              roi: "18.2%"
            }, {
              type: "카페 프랜차이즈 계약",
              detail: "로얄티 + 임대료",
              monthlyRevenue: "월 650만원",
              price: "₩8,500만원",
              status: "거래 진행중",
              time: "7분 전",
              roi: "15.4%"
            }, {
              type: "렌탈샵 장비계약 12건",
              detail: "장비 12대 월 매출",
              monthlyRevenue: "월 920만원",
              price: "₩1억 5,000만원",
              status: "거래 완료",
              time: "12분 전",
              roi: "19.8%"
            }, {
              type: "코워킹 스페이스 계약",
              detail: "좌석 30석 월 이용료",
              monthlyRevenue: "월 480만원",
              price: "₩6,200만원",
              status: "양도 대기",
              time: "18분 전",
              roi: "16.1%"
            }].map((trade, index) => <div key={index} className="p-4 bg-background rounded-lg border border-border/40 hover:shadow-mint transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <div className="font-semibold text-foreground">{trade.type}</div>
                      <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">{trade.roi} ROI</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{trade.time}</div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{trade.detail}</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-primary">{trade.monthlyRevenue}</div>
                      <div className="text-xs text-muted-foreground">월 예상 수익</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-secondary">{trade.price}</div>
                      <div className="text-xs text-muted-foreground">{trade.status}</div>
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="mt-6 text-center">
              <Button className="gradient-mint text-white border-0">
                전체 거래 내역 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary">민팅부터 거래까지</h2>
            <p className="text-xl text-muted-foreground">계약 인증부터 유동화 거래까지 완전한 에코시스템</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">1. 계약 민팅 & 인증</h3>
              <p className="text-muted-foreground">계약서를 NFT로 민팅하여 블록체인에 영구 기록하고 진본성을 인증받습니다</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">2. 마켓플레이스 등록</h3>
              <p className="text-muted-foreground">인증된 계약을 거래소에 등록하여 전 세계 투자자들에게 노출시킵니다</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">3. 양도 & 유동화</h3>
              <p className="text-muted-foreground">계약 권리를 실시간으로 양도하고, 부분 지분 매매로 유동성을 확보합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary">인기 비즈니스 계약 NFT</h2>
            <p className="text-xl text-muted-foreground">실제 비즈니스 계약을 NFT로 사고팔아요. 계약에서 나오는 수익을 받으세요!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            title: "헬스장 회원계약 45건 NFT",
            desc: "회원 45명 × 월 18만원 = 월 810만원 수익",
            price: "₩1.2억",
            monthlyRevenue: "월 810만원",
            roi: "18.2%"
          }, {
            title: "카페 프랜차이즈 계약 NFT",
            desc: "로얄티 + 임대료 = 월 650만원 수익",
            price: "₩8,500만원",
            monthlyRevenue: "월 650만원",
            roi: "15.4%"
          }, {
            title: "렌탈샵 장비계약 12건 NFT",
            desc: "장비 12대 월 매출 = 월 920만원 수익",
            price: "₩1.5억",
            monthlyRevenue: "월 920만원",
            roi: "19.8%"
          }, {
            title: "코워킹 스페이스 계약 NFT",
            desc: "좌석 30석 × 월 16만원 = 월 480만원 수익",
            price: "₩6,200만원",
            monthlyRevenue: "월 480만원",
            roi: "16.1%"
          }, {
            title: "주차장 이용계약 20건 NFT",
            desc: "도심 20대 주차 × 월 8만원 = 월 160만원 수익",
            price: "₩2,100만원",
            monthlyRevenue: "월 160만원",
            roi: "14.3%"
          }, {
            title: "교육 콘텐츠 라이센스 NFT",
            desc: "온라인 강의 수강생 200명 × 월 5만원 = 월 1,000만원 수익",
            price: "₩1.8억",
            monthlyRevenue: "월 1,000만원",
            roi: "22.1%"
          }].map((useCase, index) => <Card key={index} className="border-primary/20 hover:shadow-mint transition-all duration-300 group hover:border-primary/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-lg text-secondary group-hover:text-primary transition-colors">{useCase.title}</CardTitle>
                    <Badge className="bg-accent/10 text-accent border-accent/20 font-semibold">{useCase.roi}</Badge>
                  </div>
                  <CardDescription className="mb-4 text-sm leading-relaxed">{useCase.desc}</CardDescription>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">예상 월 수익</span>
                      <span className="font-bold text-primary">{useCase.monthlyRevenue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">NFT 가격</span>
                      <span className="font-bold text-secondary">{useCase.price}</span>
                    </div>
                    <div className="pt-2 border-t border-border/40">
                      <Button size="sm" className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                        계약 NFT 구매하기
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-secondary">계약 거래의 미래에 참여하세요</h2>
          <p className="text-xl text-muted-foreground mb-8">매일 수백 건의 계약이 MintBiz에서 거래되고 있습니다.지금 바로 계약 인증부터 거래까지 경험해보세요.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-mint text-white border-0 shadow-mint glow-mint">
              계약 민팅 시작 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              거래소 둘러보기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold text-secondary">MINTBIZ</span>
            </div>
            <p className="text-muted-foreground">© 2024 MintBiz. 비즈니스 계약 NFT 거래소</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;