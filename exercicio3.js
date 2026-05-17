function calcular() {
  const comprimento = parseFloat(document.getElementById("comprimento").value);
  const dc = parseFloat(document.getElementById("dc").value);
  const largura = parseFloat(document.getElementById("largura").value);
  const dl = parseFloat(document.getElementById("dl").value);
  const h = parseFloat(document.getElementById("h").value);
  const icf = parseFloat(document.getElementById("icf").value);
  const pa = parseFloat(document.getElementById("pa").value);
  const tf = parseFloat(document.getElementById("tf").value);
  const p1 = parseFloat(document.getElementById("p1").value);

  const ncp = Math.ceil(comprimento/dl + 1);
  const ncj = Math.ceil(largura/dc + 1);
  const lcm = 1.05*((comprimento*ncj)+(largura*ncp))

  document.getElementById("ncp").innerText = ncp.toFixed(0);
  document.getElementById("ncj").innerText = ncj.toFixed(0);
  document.getElementById("lcm").innerText = `${lcm.toFixed(0) m`;

  const kmp = 1/(2*Math.PI)*Math.log(dl**2/(4*Math.PI*(ncp-1)*h*0.01433));
  const kmj = 1/(2*Math.PI)*Math.log(dc**2/(4*Math.PI*(ncj-1)*h*0.01433));

  document.getElementById("kmp").innerText = kmp.toFixed(0);
  document.getElementById("kmj").innerText = kmj.toFixed(0);
  
  const ksp = (1/Math.PI)*((1/(2*h))+1/(dl+h)+Math.log(0.655*(ncp-1)-0.328)/dl);
  const ksj = (1/Math.PI)*((1/(2*h))+1/(dc+h)+Math.log(0.655*(ncj-1)-0.328)/dc);

  document.getElementById("ksp").innerText = ksp.toFixed(0);
  document.getElementById("ksj").innerText = ksj.toFixed(0);

  const kip = 0.65 + 0.172 * ncp;
  const kij = 0.65 + 0.172 * ncj;

  document.getElementById("kip").innerText = kip.toFixed(0);
  document.getElementById("kij").innerText = kij.toFixed(0);

  const ps = 3000;
  const lc = (kmp*kij*pa*icf*Math.sqrt(tf))/(0.116+0.174*3000);
  const epa = 116+0.7*3000/Math.sqrt(tf);
  const eper = (ksp*kip*p1*icf)/lcm;
  const etm = 116+0.174*ps/Math.sqrt(tf);
  const ete = (kmp*kip*p1*icf)/lcm;
  const ich = 116/Math.sqrt(0.5);
  const ipmsb = (1000*eper)/(1000+6*p1);
  const ipmcb = (1000*eper)/(1000+6*(p1+ps));
  const itmsb = (1000*ete)/(1000+1.5*p1);
  const itmcb = (1000*ete)/(1000+1.5*(p1+ps));
  const ia = ((1000+1.5*ps)*9*lcm)/(1000*kmp*kip*p1);

  
  document.getElementById("lc").innerText = `${lc.toFixed(0)} m`;
  document.getElementById("epa").innerText = `${epa.toFixed(0) V`;
  document.getElementById("eper").innerText = `${eper.toFixed(0) V`;
  document.getElementById("etm").innerText = `${etm.toFixed(0) V`;
  document.getElementById("ete").innerText = `${ete.toFixed(0) V`;
  document.getElementById("ich").innerText = `${ich.toFixed(0) A`;
  document.getElementById("ipmsb").innerText = `${ipmsb.toFixed(0) A`;
  document.getElementById("ipmcb").innerText = `${ipmcb.toFixed(0) A`;
  document.getElementById("itmsb").innerText = `${itmsb.toFixed(0) A`;
  document.getElementById("itmcb").innerText = `${itmcb.toFixed(0) A`;
  document.getElementById("ia").innerText = `${ia.toFixed(0) A`;
}
