package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BlockingApiLoadTest extends Simulation {

  val httpConf = http
    .baseUrl("http://localhost:30160")

  val scn = scenario("BlockingApiLoadTestScenario")
    .exec(http("GetRequest")
    .get("/weather?cityCode=011"))

  setUp(
    scn.inject(
      atOnceUsers(300)
    ).protocols(httpConf)
  )
}