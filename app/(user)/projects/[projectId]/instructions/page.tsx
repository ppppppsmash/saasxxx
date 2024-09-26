const page = ({
  params
}: {
  params: { projectId: string }
}) => {
  if (!params.projectId) return (<div>Invalid Project ID</div>);
  if (!process.env.WIDGET_URL) return (<div>Missing WIDGET_URL</div>);

  return (
    <div>
      <h1>Start Collecting Feedback</h1>
      <p>Embed the code in our site</p>
      <code>
        {/* {`<script src=https:/>/feedback.example.com/feedback.js></script>`}
        {`<script>Feedback.init("${params.projectId}")</script>`} */}
        {`<my-widget project="${params.projectId}"></my-widget>`}
        {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
      </code>
    </div>
  )
}

export default page;