
import socialLinksBlog from "@/data/socialLinksBlog";
import RightArrawWhitIcon from "@/svg/RightArrawWhitIcon";
import Image from "next/image";
import Link from "next/link";

// images import   
import blog15_img from "@/assets/images/blog/blog15.png";
import icon1_img from "@/assets/images/blog/icon1.svg";
import date_img from "@/assets/images/blog/date.svg";
import quote_img from "@/assets/images/blog/quote.svg";
import blog16_img from "@/assets/images/blog/blog16.png";
import blog17_img from "@/assets/images/blog/blog17.png";
import blog18_img from "@/assets/images/blog/blog18.png";
import blog19_img from "@/assets/images/blog/blog19.png";
import line1_img from "@/assets/images/blog/line1.svg";
import line3_img from "@/assets/images/blog/line3.svg";
import blog11_img from "@/assets/images/blog/blog11.png"; 
import blog12_img from "@/assets/images/blog/blog12.png"; 
import blog13_img from "@/assets/images/blog/blog13.png"; 
import line2_img from "@/assets/images/blog/line2.svg";

 

const SingleBlogArea = () => {

  return (
    <>

      <div className="luminix-padding-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mr-30">
                <div className="luminix-blog-d-thumb" data-aos="fade-up" data-aos-duration="700">
                  <Image width={826} height={500} src={blog15_img} alt="here is theme image" />
                </div>
                <div className="luminix-blog-meta meta2">
                  <Link href="/blog"><Image width={15} height={18} src={icon1_img} alt="here is theme image" />by admin</Link>
                  <Link href="/blog"><Image width={15} height={16} src={date_img} alt="here is theme image" />July 5, 2024</Link>
                </div>
                <div className="luminix-blog-d-content">
                  <p>As a business leader, the way you begin your week sets the tone for the days ahead. Adopting positive habits and strategic planning can significantly impact your productivity and success. Here are five tips to help you start the week right:</p>
                </div>
                <div className="luminix-blog-d-content2">
                  <p><span>1. Prioritize and plan ahead:</span> Start your week by identifying key priorities and setting clear objectives. Take a few moments on Sunday or morning to review your goals for the week. </p>
                  <p><span>2. Break up the day:</span> A big part of learning how to be productive is to stop looking at your day as one long block of eight hours, or even two half-day-long blocks. Psychologists tend to agree that the longest people can spend concentrating on one thing is about 45 minutes.</p>
                  <blockquote>
                    <Image width={276} height={158} src={quote_img} alt="here is theme image" />
                    <p>Time is our biggest resource, our biggest luxury – and the easiest thing to spend without thinking. Finding ways to manage your working time can make your jobs easier</p>
                  </blockquote>
                  <p><span>3.Make your distractions constructive:</span> A big part of learning how to be productive is to stop looking at your day as one long block of eight hours, or even two half-day-long blocks. Psychologists tend to agree that the longest people can spend concentrating on one thing is about 45 minutes.</p>
                  <p><span>4. Get ranking:</span> Planning your day out in the morning is all well and good, but we never quite get to the bottom of our to-do lists. No matter how high our motivation or productivity, there’s always more work we could do; another job to finish.</p>
                  <p><span>5 .Rethink your work-life balance:</span> Everyone has a natural rhythm with peaks and troughs throughout the day. Thankfully, many modern workplaces are recognizing this and giving their staff more flexibility in their working day.</p>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="luminix-blog-d-thumb2">
                      <Image width={401} height={278} src={blog16_img} alt="here is theme image" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="luminix-blog-d-thumb2">
                      <Image width={278} height={278} src={blog17_img} alt="here is theme image" />
                    </div>
                  </div>
                </div>
                <div className="luminix-blog-d-content2">
                  <p><span>Conclusion:</span> A lot of people keep doing things out of habit so by following the wrong timetable or not being clear enough about what it is we’re trying to get done, we can miss some good opportunities. By making a few tweaks to your daily routine and keeping an open mind.</p>
                  <p>You can start to see great changes. With those good habits racking up, you can learn how to be productive and, we hope, enjoy your work life a bit more too.</p>
                </div>
                <div className="luminix-blog-d-tag-wrap">
                  <div className="luminix-blog-tags tags2">
                    <h5>Tags:</h5>
                    <ul>
                      <li><Link href="/single-blog">Digital Agency</Link></li>
                      <li><Link href="/single-blog">Business</Link></li>
                    </ul>
                  </div>
                  <div className="luminix-blog-d-social">
                    <h5>Share:</h5>
                    <div className="luminix-social-wrap blog-social">
                      <ul>
                        {socialLinksBlog.map((link, index) => (
                          <li key={index}>
                            <Link href={link.href} target="_blank" dangerouslySetInnerHTML={{ __html: link.svg }}>

                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="luminix-blog-d-comment-box">
                  <h5>Comments:</h5>
                  <div className="luminix-blog-d-comment-wrap1">
                    <div className="luminix-blog-d-comment-thumb">
                      <Image width={80} height={80} src={blog18_img} alt="here is theme image" />
                    </div>
                    <div className="luminix-blog-d-comment-data1">
                      <h6>Ricky Smith</h6>
                      <span>July 5, 2024</span>
                      <p>I read the blog & found it focused on a single task. Multitasking is a myth. When tasks pile up, our brain urges us to handle multiple tasks.</p>
                    </div>
                    <div className="reply-btn">
                      <Link href="/single-blog">Reply</Link>
                    </div>
                  </div>
                  <div className="luminix-blog-d-comment-wrap pl-101">
                    <div className="luminix-blog-d-comment-thumb">
                      <Image width={50} height={50} src={blog19_img} alt="here is theme image" />
                    </div>
                    <div className="luminix-blog-d-comment-data">
                      <h6>Alex Jones</h6>
                      <span>July 5, 2024</span>
                      <p>You are right to avoid multitasking. It's a common misconception that multitasking allows you to get more done.</p>
                    </div>
                    <div className="reply-btn">
                      <Link href="/single-blog">Reply</Link>
                    </div>
                  </div>
                </div>
                <div className="luminix-blog-d-comment-box2">
                  <h5>Leave a comments:</h5>
                  <div className="luminix-contact-box pl-51">
                    <form>
                      <div className="luminix-main-field">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="luminix-main-field">
                            <input type="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="luminix-main-field">
                            <input type="text" placeholder="Phone Number" />
                          </div>
                        </div>
                      </div>
                      <div className="luminix-main-field-textarea">
                        <textarea className="button-text" name="textarea" placeholder="Write Your Message Here..."></textarea>
                      </div>
                      <button className="luminix-default-btn extra-btn4 pill" type="button">Send message
                        <RightArrawWhitIcon />
                      </button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="luminix-blog-sidebar">
                <div className="luminix-blog-widgets">
                  <form>
                    <div className="luminix-search-box">
                      <input type="search" placeholder="Type to search..." />
                      <button id="luminix-search-btn" type="button"><i className="ri-search-line"></i></button>
                    </div>
                  </form>
                </div>
                <div className="luminix-blog-widgets">
                  <h5>Blog Categories</h5>
                  <Image width={191} height={2} className="line" src={line1_img} alt="here is theme image" />
                  <div className="luminix-blog-categorie">
                    <ul>
                      <li><Link href="/single-blog">Uncategorized (78)</Link></li>
                      <li><Link href="/single-blog">Technology (05)</Link></li>
                      <li><Link href="/single-blog">Business & Marketing (23)</Link></li>
                      <li><Link href="/single-blog">Digital Agency (10)</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="luminix-blog-widgets">
                  <h5>Recent Posts</h5>
                  <Image width={156} height={2} className="line" src={line3_img} alt="here is theme image" />
                  <Link className="luminix-recent-post-item pt-15" href="/single-blog">
                    <div className="luminix-recent-post-thumb">
                      <Image width={150} height={100} src={blog11_img} alt="here is theme image" />
                    </div>
                    <div className="luminix-recent-post-data">
                      <span> <Image width={15} height={16} src={date_img} alt="here is theme image" />July 5, 2024</span>
                      <div className="blog">
                        <h6>Six ‘what ifs’ that could transformdigital agency</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="luminix-recent-post-item" href="/single-blog">
                    <div className="luminix-recent-post-thumb">
                      <Image width={150} height={100} src={blog12_img} alt="here is theme image" />
                    </div>
                    <div className="luminix-recent-post-data">
                      <span> <Image width={15} height={16} src={date_img} alt="here is theme image" /> July 3, 2024</span>
                      <div className="blog">
                        <h6>Case story: How to the design avatar generator</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="luminix-recent-post-item" href="/single-blog">
                    <div className="luminix-recent-post-thumb">
                      <Image width={150} height={100} src={blog13_img} alt="here is theme image" />
                    </div>
                    <div className="luminix-recent-post-data">
                      <span> <Image width={15} height={16} src={date_img} alt="here is theme image" />June 27, 2024</span>
                      <div className="blog">
                        <h6>Build a digital agency website in 4 easy steps</h6>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="luminix-blog-widgets">
                  <h5>Tags</h5>
                  <Image width={56} height={2} className="line" src={line2_img} alt="here is theme image" />
                  <div className="luminix-blog-tags">
                    <ul>
                      <li><Link href="/single-blog">Business</Link></li>
                      <li><Link href="/single-blog">Digital</Link></li>
                      <li><Link href="/single-blog">IT Solution</Link></li>
                      <li><Link href="/single-blog">Technology</Link></li>
                      <li><Link href="/single-blog">Agency</Link></li>
                      <li><Link href="/single-blog">Digital</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SingleBlogArea;