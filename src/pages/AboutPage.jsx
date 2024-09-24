import './css/about.css';

export default function AboutPage() {
  return (
    <div id = "about">
      <div>
        <img src = "/src/assets/matthewwilliams.jpg" id = "avatar" alt = "avatar of Matthew Williams" />
      </div>
      <div id = "biography">
        <p>I've spent more than 30 years as a typesetter and book designer, but I've seen the writing on the wall. It's pretty apparent that AI is going to put me out of business before I'm ready to retire. &ldquo;Time to retool,&rdquo; I&nbsp;thought to myself, but to do what?</p>
        <p>Thinking carefully about what I enjoy most about my work now, I&nbsp;realized that processing text for publication and writing VBA macros to help with that gave me the most joy, and the actual process of creating a text design was pretty up there, too.</p>
        <p>I started dabbling in webpage development back when layouts were all table-based. It seemed so primitive and tedious, and I didn't gave up on it almost before I really got started. But a lot has changed since then. The processes of laying out digital pages and laying out print pages has converged. Good typography is much more feasable on the web now. Layouts can be grid-based&mdash;a tool print designers have been using since newspapers were invented.</p>
        <p>It's plain to me now that the next logical step in my growth as a designer and typesetter is to become an expert at digital publishing, be that websites or ePUBs or mobile-native apps. So, here I am learning JavaScript and the latest tools and techniques for handling HTML and CSS and looking forward to a challenging but fun new world.</p>
      </div>
    </div>
  )
}