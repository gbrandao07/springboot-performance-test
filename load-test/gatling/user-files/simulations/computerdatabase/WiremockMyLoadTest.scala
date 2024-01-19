package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class WiremockMyLoadTest extends Simulation {

  val httpConf = http
    .baseUrl("http://localhost:8087")

  val scn = scenario("MyScenarioWiremock")
    .exec(http("GetRequest")
    .get("/thirdparty/api/weather?cityCode=011"))

  setUp(
    scn.inject(
      atOnceUsers(100) // Envia todas as 100 requisições simultaneamente
    ).protocols(httpConf)
  )
}

